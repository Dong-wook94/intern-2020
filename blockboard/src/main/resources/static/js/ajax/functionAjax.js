function getNewFunctionInfo(companyID, jsonData) {
  $.ajax({
    type: 'POST',                 //get방식으로 통신
    url: "/functions/" + companyID + "/new-info",    //탭의 data-tab속성의 값으로 된 html파일로 통신
    data: { functionInfoData: jsonData },
    error: function () {  //통신 실패시
      alert('통신실패!');
    },
    success: function (data) {    //통신 성공시 탭 내용담는 div를 읽어들인 값으로 채운다.
      console.log("success" + data);
      var containerObj = $('#fuctionListContainer');
      containerObj.html("현재 사용중인 기능 : ");
      $.each(data, function (key, value) {
        console.log(value.functionName + " : " + value.companyID);
        if (value.companyID == 0) {
          containerObj.append("<span id = functionAble" + value.functionID + " style=display:none value=off>" + value.functionName + "</span>");
        }
        else {
          containerObj.append("<span id = functionAble" + value.functionID + " value=on>" + value.functionName + " </span>");
        }

      });
      alert("기능이 변경되었습니다.");
      $('#postcontent').html("");
    }
  });
}

function getOldFunctionInfoForChange(companyID) {
  $.ajax({
    type: 'GET',                 //POST 통신
    url: "/functions/" + companyID + "/info",    //탭의 data-tab속성의 값으로 된 html파일로 통신
    error: function () {  //통신 실패시
      alert('통신실패!');
    },
    success: function (data) {    //통신 성공시 탭 내용담는 div를 읽어들인 값으로 채운다.
      console.log("success" + data);
      var containerObj = $('#config_container');
      containerObj.html("");
      $.each(data, function (key, value) {
        console.log(value.functionInfoData);
        if (value.companyID == 0) {
          containerObj.append("<div><span>" + value.functionName + "</span> <label><input type=checkbox name=function value=" +
            value.functionID + ">현재상태 OFF</label></div>");
        }
        else {
          containerObj.append("<div><span>" + value.functionName + "</span> <label><input type=checkbox name=function value=" +
            value.functionID + " checked>현재상태 ON</label></div>");
        }

      });
      containerObj.append(" <a id ='addFuncBtn' onclick = javascript:clickSaveFunctionChange(this) style=cursor:pointer>저장하기</a>" +
        "<button class = 'functionClose' type='button' onclick=javascript:clickConfigClose(this)>닫기</button>");
    }
  });
}