const getFormatedDate = (value, type, inMs = false) => {
  if (!type) {
    return value;
  }
  const timestamp = inMs ? value : value * 1000;

  const date = new Date(timestamp);

  let options;

  if (type === "date") {
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  } else if (type === "time") {
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  }

  return new Intl.DateTimeFormat("en-us", options).format(date);
};

export { getFormatedDate };
