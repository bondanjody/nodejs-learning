import winston from "winston";

async function callAsync() {
  return Promise.reject("Rejected");
}

const logger = winston.createLogger({
  level: "info",
  //   handleRejections: true     (untuk level )
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({
      handleExceptions: true,
      filename: "error-rejection.log",
      handleRejections: true,
    }),
  ],
});

callAsync();

// Error rejection akan di save di file : error-rejection.log
