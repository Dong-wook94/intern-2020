/**
 * @author Dongwook Kim <dongwook.kim1211@worksmobile.com>
 * @file const.js
 */

const COMMENT_PREFIX = {
  length: 7
};

const KEYCODE = {
  ENTER: 13
};
const MAX_LENGTH = {
  BOARD_NAME: 150
};
const BOARD_ID = {
  MY_POST: -1,
  MY_REPLY: -2,
  TEMP_BOX: -3,
  RECYCLE: -4,
  RECENT: -5,
  POPULAR: -6
};

const HTTP_STATUS = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409
};

const POST_STATUS = {
  NORMAL: "normal",
  TEMP: "temp",
  RECYCLE: "recycle"
};

const UNICODE_3_BYTE = 11;
const UNICODE_2_BYTE = 7;
const BYTE_SIZE_3 = 3;
const BYTE_SIZE_2 = 2;
const BYTE_SIZE_1 = 1;

const ALARM_COUNT_PER_PAGE = 6;