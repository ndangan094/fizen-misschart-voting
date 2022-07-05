import { useEffect, useMemo, useRef, useState } from "react";

export function useCountdown(
  initialSeconds,
  acceptCountDown,
  onCountDownEnd,
  { isWaitingAfterCountDownEnd = false, waitingAfterCountDownEndSeconds = 0 } = {},
) {
  const [cr, setCr] = useState(initialSeconds);
  const countdown = useMemo(() => getCountdownTime(cr), [cr]);
  const interval = useRef(null);

  useEffect(() => {
    if (initialSeconds && initialSeconds > 0) {
      setCr(initialSeconds);
    }
  }, [initialSeconds]);

  useEffect(() => {
    interval.current = setInterval(() => {
      if (acceptCountDown) {
        setCr((cr) => (cr - 1 <= 0 ? 0 : cr - 1));
      }
    }, 1000);

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, [acceptCountDown]);

  useEffect(() => {
    let timer;
    if (cr === 0) {
      if (interval.current) {
        clearInterval(interval.current);
      }
      if (onCountDownEnd) {
        if (isWaitingAfterCountDownEnd) {
          timer = setTimeout(() => {
            onCountDownEnd();
          }, waitingAfterCountDownEndSeconds * 1000);
        } else {
          onCountDownEnd();
        }
      }
    }

    return () => {
      clearTimeout(timer);
    };
  }, [cr, isWaitingAfterCountDownEnd, waitingAfterCountDownEndSeconds]);

  const resetCountdown = () => {
    setCr(initialSeconds);
  };

  return [countdown, cr, resetCountdown];
}

export const getCountdownTime = (cr) => {
    const date =
      parseInt(cr / 86400 + "") < 10
        ? "0" + Math.abs(parseInt(cr / 86400 + ""))
        : Math.abs(parseInt(cr / 86400 + ""));
    const hours =
      parseInt((cr - parseInt(date + "") * 86400) / 3600 + "") < 10
        ? "0" + Math.abs(parseInt((cr - parseInt(date + "") * 86400) / 3600 + ""))
        : parseInt(
            ((cr - parseInt(date + "") * 86400) / 3600 < 0
              ? 0
              : (cr - parseInt(date + "") * 86400) / 3600) + "",
          );
  
    const minutes =
      parseInt((cr - parseInt(date + "") * 86400 - parseInt(hours + "") * 3600) / 60 + "") < 10
        ? "0" +
          Math.abs(
            parseInt((cr - parseInt(date + "") * 86400 - parseInt(hours + "") * 3600) / 60 + ""),
          )
        : Math.abs(
            parseInt((cr - parseInt(date + "") * 86400 - parseInt(hours + "") * 3600) / 60 + ""),
          );
  
    const s = (cr - parseInt(date + "") * 86400 - parseInt(hours + "") * 3600) % 60;
    const seconds = s < 10 ? `0${s < 0 ? "0" : s}` : s;
  
    return { date, hours, minutes, seconds };
  };