const HTTP_STATUS_CODES = {
  ACCEPTED: 202,
  BAD_GATEWAY: 502,
  BAD_REQUEST: 400,
  CONTINUE: 100,
  CREATED: 201,
  FORBIDDEN: 403,
  FOUND: 302,
  GATEWAY_TIMEOUT: 504,
  INTERNAL_SERVER_ERROR: 500,
  METHOD_NOT_ALLOWED: 405,
  NOT_FOUND: 404,
  OK: 200,
  REQUEST_TIMEOUT: 408,
  SERVICE_UNAVAILABLE: 503,
  UNAUTHORIZED: 401,
  UPDATED: 204,
  ALREADY_EXISTS: 409,
  PRECONDITION_FAILED: 412,
  COMPLETED: 410,
};
module.exports = HTTP_STATUS_CODES;
