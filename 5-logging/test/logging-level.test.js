import winston from "winston";

test("logging with level", () => {
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})],
  });

  logger.log({ level: "error", message: "Error Message" });
  logger.log({ level: "warn", message: "Warn Message" });
  logger.log({ level: "info", message: "Info Message" });
  logger.log({ level: "http", message: "HTTP Message" });
  logger.log({ level: "verbose", message: "Verbose Message" });
  logger.log({ level: "debug", message: "Debug Message" });
  logger.log({ level: "silly", message: "Silly Message" });
});

// setelah level di set
test("logging with level and setup the level", () => {
  const logger = winston.createLogger({
    level: "debug",
    transports: [new winston.transports.Console({})],
  });

  logger.log({ level: "error", message: "Error Message" });
  logger.log({ level: "warn", message: "Warn Message" });
  logger.log({ level: "info", message: "Info Message" });
  logger.log({ level: "http", message: "HTTP Message" });
  logger.log({ level: "verbose", message: "Verbose Message" });
  logger.log({ level: "debug", message: "Debug Message" });
  logger.log({ level: "silly", message: "Silly Message" });
});
// NOTE : kode di atas akan menampilkan dari level debug ke atas

// shortcut function
test("using shortcut", () => {
  const logger = winston.createLogger({
    level: "silly",
    transports: [new winston.transports.Console({})],
  });

  logger.error("Error Message");
  logger.warn("Warn Message");
  logger.info("Info Message");
  logger.http("HTTP Message");
  logger.verbose("Verbose Message");
  logger.debug("Debug Message");
  logger.silly("Silly Message");
});
