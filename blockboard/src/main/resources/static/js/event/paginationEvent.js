/**
 * @author Dongwook Kim <dongwook.kim1211@worksmobile.com>
 * @file paginationEvent.js
 */

/**
 * 페이징 이벤트
 * 1. li의 값을 가져온다
 * 2. 전체 게시물 개수를 가져온다.
 * 3. ajax로 게시물 목록 요청한다.
 * */

$(document).on('click', '.posts-page-item', function () {
  var boardID = getCurrentActiveBoardID();
  var pageNum = $(this).find(".page-link").attr("data-page");
  getPageList(pageNum, boardID,0, updatePostPageList);
});

$(document).on('click', '.comments-page-item', function () {
  var postID = getPostIDInPost();
  var pageNum = $(this).find(".page-link").attr("data-page");
  getPageList(pageNum, 0,postID, updateCommentPageList);
});


