const Throttle = (func: () => void, ms: number) => {
  let timeout: any = null;
  return () => {
    if (timeout === null) {
      timeout = setTimeout(() => {
        func();
        timeout = null;
      }, ms);
    }
  };
};

export default Throttle;
