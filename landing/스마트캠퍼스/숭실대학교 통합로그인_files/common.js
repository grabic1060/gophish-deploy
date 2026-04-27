function imgChg(id) {
		var tab = document.getElementById(id);
		var tabanchor = tab.getElementsByTagName('a');

		for (i=0; i<tabanchor.length; i++) {
			if (tabanchor[i].childNodes[0].src.indexOf("_on.gif") != -1) {
				return false;
			} else {
				tabanchor[i].onmouseover = tabanchor[i].onfocus = function () {
					if (this.childNodes[0].src.indexOf("_on.gif") != -1) return false;
						this.childNodes[0].src = this.childNodes[0].src.replace('_off.gif', '_on.gif');
						this.parentNode.className += " on";
				}
				tabanchor[i].onmouseout = tabanchor[i].onblur = function () {
					this.childNodes[0].src = this.childNodes[0].src.replace('_on.gif', '_off.gif');
					this.parentNode.className = this.parentNode.className.replace(" on", "");
				}
			}
		}
	}



			function MM_reloadPage(init) {  //reloads the window if Nav4 resized
			  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
				document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
			  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
			}
			MM_reloadPage(true);

			function MM_swapImgRestore() { //v3.0
			  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
			}

			function MM_findObj(n, d) { //v4.01
			  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
				d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
			  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
			  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
			  if(!x && d.getElementById) x=d.getElementById(n); return x;
			}
			//이미지 롤오버 스크립트
			function MM_swapImage() { //v3.0
			  var i,j=0,x,a=MM_swapImage.arguments; 
			  document.MM_sr=new Array; 
			  for(i=0;i<(a.length-2);i+=3)
			   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
			}

			function MM_showHideLayers() { //v6.0
			  var i,p,v,obj,args=MM_showHideLayers.arguments;
			  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
				if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
				obj.visibility=v; }
			}

			function MM_preloadImages() { //v3.0
			  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
				var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
				if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
			}

			function MM_reloadPage(init) {  //reloads the window if Nav4 resized
			  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
				document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
			  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
			}
	
	

function btn_list(tmp) {
	if(tmp==1){
	document.getElementById("Images01").src="../images/btn/btn_entry_on.gif";
	document.getElementById("Images02").src="../images/btn/btn_revision_off.gif";
	document.getElementById("Images03").src="../images/btn/btn_deletion_off.gif";
	document.getElementById("Images04").src="../images/btn/btn_list_off.gif";
	document.getElementById("Images05").src="../images/btn/btn_file_off.gif";
	document.getElementById("Images06").src="../images/btn/btn_excel_off.gif";
	document.getElementById("Images07").src="../images/btn/btn_hidden_off.gif";
	document.getElementById("Images08").src="../images/btn/btn_management_off.gif";
	document.getElementById("Images09").src="../images/btn/btn_new_off.gif";
	document.getElementById("Images10").src="../images/btn/btn_print_off.gif";
	document.getElementById("Images11").src="../images/btn/btn_reference_off.gif";
	document.getElementById("Images12").src="../images/btn/btn_save_off.gif";
	document.getElementById("Images13").src="../images/btn/btn_search_off.gif";
	document.getElementById("Images14").src="../images/btn/btn_view_off.gif";
	}
	else if(tmp==2){
	document.getElementById("Images01").src="../images/btn/btn_entry_off.gif";
	document.getElementById("Images02").src="../images/btn/btn_revision_on.gif";
	document.getElementById("Images03").src="../images/btn/btn_deletion_off.gif";
	document.getElementById("Images04").src="../images/btn/btn_list_off.gif";
	document.getElementById("Images05").src="../images/btn/btn_file_off.gif";
	document.getElementById("Images06").src="../images/btn/btn_excel_off.gif";
	document.getElementById("Images07").src="../images/btn/btn_hidden_off.gif";
	document.getElementById("Images08").src="../images/btn/btn_management_off.gif";
	document.getElementById("Images09").src="../images/btn/btn_new_off.gif";
	document.getElementById("Images10").src="../images/btn/btn_print_off.gif";
	document.getElementById("Images11").src="../images/btn/btn_reference_off.gif";
	document.getElementById("Images12").src="../images/btn/btn_save_off.gif";
	document.getElementById("Images13").src="../images/btn/btn_search_off.gif";
	document.getElementById("Images14").src="../images/btn/btn_view_off.gif";
	}
	else if(tmp==3){
	document.getElementById("Images01").src="../images/btn/btn_entry_off.gif";
	document.getElementById("Images02").src="../images/btn/btn_revision_off.gif";
	document.getElementById("Images03").src="../images/btn/btn_deletion_on.gif";
	document.getElementById("Images04").src="../images/btn/btn_list_off.gif";
	document.getElementById("Images05").src="../images/btn/btn_file_off.gif";
	document.getElementById("Images06").src="../images/btn/btn_excel_off.gif";
	document.getElementById("Images07").src="../images/btn/btn_hidden_off.gif";
	document.getElementById("Images08").src="../images/btn/btn_management_off.gif";
	document.getElementById("Images09").src="../images/btn/btn_new_off.gif";
	document.getElementById("Images10").src="../images/btn/btn_print_off.gif";
	document.getElementById("Images11").src="../images/btn/btn_reference_off.gif";
	document.getElementById("Images12").src="../images/btn/btn_save_off.gif";
	document.getElementById("Images13").src="../images/btn/btn_search_off.gif";
	document.getElementById("Images14").src="../images/btn/btn_view_off.gif";
	}
	else if(tmp==4){
	document.getElementById("Images01").src="../images/btn/btn_entry_off.gif";
	document.getElementById("Images02").src="../images/btn/btn_revision_off.gif";
	document.getElementById("Images03").src="../images/btn/btn_deletion_off.gif";
	document.getElementById("Images04").src="../images/btn/btn_list_on.gif";
	document.getElementById("Images05").src="../images/btn/btn_file_off.gif";
	document.getElementById("Images06").src="../images/btn/btn_excel_off.gif";
	document.getElementById("Images07").src="../images/btn/btn_hidden_off.gif";
	document.getElementById("Images08").src="../images/btn/btn_management_off.gif";
	document.getElementById("Images09").src="../images/btn/btn_new_off.gif";
	document.getElementById("Images10").src="../images/btn/btn_print_off.gif";
	document.getElementById("Images11").src="../images/btn/btn_reference_off.gif";
	document.getElementById("Images12").src="../images/btn/btn_save_off.gif";
	document.getElementById("Images13").src="../images/btn/btn_search_off.gif";
	document.getElementById("Images14").src="../images/btn/btn_view_off.gif";
	}
	else if(tmp==5){
	document.getElementById("Images01").src="../images/btn/btn_entry_off.gif";
	document.getElementById("Images02").src="../images/btn/btn_revision_off.gif";
	document.getElementById("Images03").src="../images/btn/btn_deletion_off.gif";
	document.getElementById("Images04").src="../images/btn/btn_list_off.gif";
	document.getElementById("Images05").src="../images/btn/btn_file_on.gif";
	document.getElementById("Images06").src="../images/btn/btn_excel_off.gif";
	document.getElementById("Images07").src="../images/btn/btn_hidden_off.gif";
	document.getElementById("Images08").src="../images/btn/btn_management_off.gif";
	document.getElementById("Images09").src="../images/btn/btn_new_off.gif";
	document.getElementById("Images10").src="../images/btn/btn_print_off.gif";
	document.getElementById("Images11").src="../images/btn/btn_reference_off.gif";
	document.getElementById("Images12").src="../images/btn/btn_save_off.gif";
	document.getElementById("Images13").src="../images/btn/btn_search_off.gif";
	document.getElementById("Images14").src="../images/btn/btn_view_off.gif";
	}
		else if(tmp==6){
	document.getElementById("Images01").src="../images/btn/btn_entry_off.gif";
	document.getElementById("Images02").src="../images/btn/btn_revision_off.gif";
	document.getElementById("Images03").src="../images/btn/btn_deletion_off.gif";
	document.getElementById("Images04").src="../images/btn/btn_list_off.gif";
	document.getElementById("Images05").src="../images/btn/btn_file_off.gif";
	document.getElementById("Images06").src="../images/btn/btn_excel_on.gif";
	document.getElementById("Images07").src="../images/btn/btn_hidden_off.gif";
	document.getElementById("Images08").src="../images/btn/btn_management_off.gif";
	document.getElementById("Images09").src="../images/btn/btn_new_off.gif";
	document.getElementById("Images10").src="../images/btn/btn_print_off.gif";
	document.getElementById("Images11").src="../images/btn/btn_reference_off.gif";
	document.getElementById("Images12").src="../images/btn/btn_save_off.gif";
	document.getElementById("Images13").src="../images/btn/btn_search_off.gif";
	document.getElementById("Images14").src="../images/btn/btn_view_off.gif";
	}
		else if(tmp==7){
	document.getElementById("Images01").src="../images/btn/btn_entry_off.gif";
	document.getElementById("Images02").src="../images/btn/btn_revision_off.gif";
	document.getElementById("Images03").src="../images/btn/btn_deletion_off.gif";
	document.getElementById("Images04").src="../images/btn/btn_list_off.gif";
	document.getElementById("Images05").src="../images/btn/btn_file_off.gif";
	document.getElementById("Images06").src="../images/btn/btn_excel_off.gif";
	document.getElementById("Images07").src="../images/btn/btn_hidden_on.gif";
	document.getElementById("Images08").src="../images/btn/btn_management_off.gif";
	document.getElementById("Images09").src="../images/btn/btn_new_off.gif";
	document.getElementById("Images10").src="../images/btn/btn_print_off.gif";
	document.getElementById("Images11").src="../images/btn/btn_reference_off.gif";
	document.getElementById("Images12").src="../images/btn/btn_save_off.gif";
	document.getElementById("Images13").src="../images/btn/btn_search_off.gif";
	document.getElementById("Images14").src="../images/btn/btn_view_off.gif";
	}
		else if(tmp==8){
	document.getElementById("Images01").src="../images/btn/btn_entry_off.gif";
	document.getElementById("Images02").src="../images/btn/btn_revision_off.gif";
	document.getElementById("Images03").src="../images/btn/btn_deletion_off.gif";
	document.getElementById("Images04").src="../images/btn/btn_list_off.gif";
	document.getElementById("Images05").src="../images/btn/btn_file_off.gif";
	document.getElementById("Images06").src="../images/btn/btn_excel_off.gif";
	document.getElementById("Images07").src="../images/btn/btn_hidden_off.gif";
	document.getElementById("Images08").src="../images/btn/btn_management_on.gif";
	document.getElementById("Images09").src="../images/btn/btn_new_off.gif";
	document.getElementById("Images10").src="../images/btn/btn_print_off.gif";
	document.getElementById("Images11").src="../images/btn/btn_reference_off.gif";
	document.getElementById("Images12").src="../images/btn/btn_save_off.gif";
	document.getElementById("Images13").src="../images/btn/btn_search_off.gif";
	document.getElementById("Images14").src="../images/btn/btn_view_off.gif";
	}
		else if(tmp==9){
	document.getElementById("Images01").src="../images/btn/btn_entry_off.gif";
	document.getElementById("Images02").src="../images/btn/btn_revision_off.gif";
	document.getElementById("Images03").src="../images/btn/btn_deletion_off.gif";
	document.getElementById("Images04").src="../images/btn/btn_list_off.gif";
	document.getElementById("Images05").src="../images/btn/btn_file_off.gif";
	document.getElementById("Images06").src="../images/btn/btn_excel_off.gif";
	document.getElementById("Images07").src="../images/btn/btn_hidden_off.gif";
	document.getElementById("Images08").src="../images/btn/btn_management_off.gif";
	document.getElementById("Images09").src="../images/btn/btn_new_on.gif";
	document.getElementById("Images10").src="../images/btn/btn_print_off.gif";
	document.getElementById("Images11").src="../images/btn/btn_reference_off.gif";
	document.getElementById("Images12").src="../images/btn/btn_save_off.gif";
	document.getElementById("Images13").src="../images/btn/btn_search_off.gif";
	document.getElementById("Images14").src="../images/btn/btn_view_off.gif";
	}
		else if(tmp==10){
	document.getElementById("Images01").src="../images/btn/btn_entry_off.gif";
	document.getElementById("Images02").src="../images/btn/btn_revision_off.gif";
	document.getElementById("Images03").src="../images/btn/btn_deletion_off.gif";
	document.getElementById("Images04").src="../images/btn/btn_list_off.gif";
	document.getElementById("Images05").src="../images/btn/btn_file_off.gif";
	document.getElementById("Images06").src="../images/btn/btn_excel_off.gif";
	document.getElementById("Images07").src="../images/btn/btn_hidden_off.gif";
	document.getElementById("Images08").src="../images/btn/btn_management_off.gif";
	document.getElementById("Images09").src="../images/btn/btn_new_off.gif";
	document.getElementById("Images10").src="../images/btn/btn_print_on.gif";
	document.getElementById("Images11").src="../images/btn/btn_reference_off.gif";
	document.getElementById("Images12").src="../images/btn/btn_save_off.gif";
	document.getElementById("Images13").src="../images/btn/btn_search_off.gif";
	document.getElementById("Images14").src="../images/btn/btn_view_off.gif";
	}
		else if(tmp==11){
	document.getElementById("Images01").src="../images/btn/btn_entry_off.gif";
	document.getElementById("Images02").src="../images/btn/btn_revision_off.gif";
	document.getElementById("Images03").src="../images/btn/btn_deletion_off.gif";
	document.getElementById("Images04").src="../images/btn/btn_list_off.gif";
	document.getElementById("Images05").src="../images/btn/btn_file_off.gif";
	document.getElementById("Images06").src="../images/btn/btn_excel_off.gif";
	document.getElementById("Images07").src="../images/btn/btn_hidden_off.gif";
	document.getElementById("Images08").src="../images/btn/btn_management_off.gif";
	document.getElementById("Images09").src="../images/btn/btn_new_off.gif";
	document.getElementById("Images10").src="../images/btn/btn_print_off.gif";
	document.getElementById("Images11").src="../images/btn/btn_reference_on.gif";
	document.getElementById("Images12").src="../images/btn/btn_save_off.gif";
	document.getElementById("Images13").src="../images/btn/btn_search_off.gif";
	document.getElementById("Images14").src="../images/btn/btn_view_off.gif";
	}
		else if(tmp==12){
	document.getElementById("Images01").src="../images/btn/btn_entry_off.gif";
	document.getElementById("Images02").src="../images/btn/btn_revision_off.gif";
	document.getElementById("Images03").src="../images/btn/btn_deletion_off.gif";
	document.getElementById("Images04").src="../images/btn/btn_list_off.gif";
	document.getElementById("Images05").src="../images/btn/btn_file_off.gif";
	document.getElementById("Images06").src="../images/btn/btn_excel_off.gif";
	document.getElementById("Images07").src="../images/btn/btn_hidden_off.gif";
	document.getElementById("Images08").src="../images/btn/btn_management_off.gif";
	document.getElementById("Images09").src="../images/btn/btn_new_off.gif";
	document.getElementById("Images10").src="../images/btn/btn_print_off.gif";
	document.getElementById("Images11").src="../images/btn/btn_reference_off.gif";
	document.getElementById("Images12").src="../images/btn/btn_save_on.gif";
	document.getElementById("Images13").src="../images/btn/btn_search_off.gif";
	document.getElementById("Images14").src="../images/btn/btn_view_off.gif";
	}
		else if(tmp==13){
	document.getElementById("Images01").src="../images/btn/btn_entry_off.gif";
	document.getElementById("Images02").src="../images/btn/btn_revision_off.gif";
	document.getElementById("Images03").src="../images/btn/btn_deletion_off.gif";
	document.getElementById("Images04").src="../images/btn/btn_list_off.gif";
	document.getElementById("Images05").src="../images/btn/btn_file_off.gif";
	document.getElementById("Images06").src="../images/btn/btn_excel_off.gif";
	document.getElementById("Images07").src="../images/btn/btn_hidden_off.gif";
	document.getElementById("Images08").src="../images/btn/btn_management_off.gif";
	document.getElementById("Images09").src="../images/btn/btn_new_off.gif";
	document.getElementById("Images10").src="../images/btn/btn_print_off.gif";
	document.getElementById("Images11").src="../images/btn/btn_reference_off.gif";
	document.getElementById("Images12").src="../images/btn/btn_save_off.gif";
	document.getElementById("Images13").src="../images/btn/btn_search_on.gif";
	document.getElementById("Images14").src="../images/btn/btn_view_off.gif";
	}
		else if(tmp==14){
	document.getElementById("Images01").src="../images/btn/btn_entry_off.gif";
	document.getElementById("Images02").src="../images/btn/btn_revision_off.gif";
	document.getElementById("Images03").src="../images/btn/btn_deletion_off.gif";
	document.getElementById("Images04").src="../images/btn/btn_list_off.gif";
	document.getElementById("Images05").src="../images/btn/btn_file_off.gif";
	document.getElementById("Images06").src="../images/btn/btn_excel_off.gif";
	document.getElementById("Images07").src="../images/btn/btn_hidden_off.gif";
	document.getElementById("Images08").src="../images/btn/btn_management_off.gif";
	document.getElementById("Images09").src="../images/btn/btn_new_off.gif";
	document.getElementById("Images10").src="../images/btn/btn_print_off.gif";
	document.getElementById("Images11").src="../images/btn/btn_reference_off.gif";
	document.getElementById("Images12").src="../images/btn/btn_save_off.gif";
	document.getElementById("Images13").src="../images/btn/btn_search_off.gif";
	document.getElementById("Images14").src="../images/btn/btn_view_on.gif";
	}
} 



		function Popup_ASP(linkurl, fwidth, fheight, mode, value, code, idx){
				
			var d = new Date();
			var s = d.getHours() + d.getMinutes() + d.getSeconds();
			
			
			var height = screen.height; 
			var width = screen.width; 
			var leftpos = width / 2- fwidth / 2; 
			var toppos = height / 2- fheight / 2;
					
			var openwinasp = window.open(linkurl + "?mode=" + mode + "&value=" + value + "&code=" + code + "&idx=" + idx, "popup_"+linkurl.replace('.asp',''), 
						  "left=" + leftpos + ", top = " + toppos + ", height=" + fheight + ", width=" + fwidth + 
						  ", menubar=no, resizable=no, status=no, scrollbars=yes");
			openwinasp.focus();
			
			d = null;
			s = null;
			fheight = null;
			fwidth = null;
			height = null;
			width = null;
			leftpos = null;
			toppos = null;	
		}

		function fnc_PoupOpen(linkurl, fwidth, fheight){
				
			var d = new Date();
			var s = d.getHours() + d.getMinutes() + d.getSeconds();
			
			
			var height = screen.height; 
			var width = screen.width; 
			var leftpos = width / 2- fwidth / 2; 
			var toppos = height / 2- fheight / 2;
					
			var openWin = window.open(linkurl, "popup_Common", "left="+ leftpos +", top = "+ toppos +", height="+ fheight +", width="+ fwidth +", menubar=no, resizable=no, status=no, scrollbars=yes");
			openWin.focus();
			
			d = null;
			s = null;
			fheight = null;
			fwidth = null;
			height = null;
			width = null;
			leftpos = null;
			toppos = null;	
		}

		//**********************************************************************************//
		//입력폼에서 Null문자를 제거
		//	varStr	: document.form.Inputbox.value
		//**********************************************************************************//
		function Trim(varStr)
		{
			var reg = /\s+/g;
			return varStr.replace(reg,'');
		}

		//**********************************************************************************//
		//사용자 입력폼 입력여부 체크
		//	varObject	: document.form.inputbox
		//	varName		: 입력폼 이름
		//**********************************************************************************//
		function fncCheckUserInputbox(varObject, varName)
		{
			if (Trim(varObject.value) == ""){
				alert(varName + " 입력하세요");
				varObject.value = "";
				varObject.focus();
				return false;
			}else{
				return true;
			}
		}

		//**********************************************************************************//
		//사용자 입력폼 입력여부 체크
		//	varObject	: document.form.ListBox
		//	varName		: 선택폼 이름
		//**********************************************************************************//
		function fncCheckUserListBox(varObject, varName)
		{
			if (Trim(varObject.value) == "")
			{
				alert(varName + " 선택해 주세요");
				//varObject.value = "";
				varObject.focus();
				return false;
			}else
			{
				return true;
			}
		}

		//**********************************************************************************//
		//사용자 입력폼 입력여부 체크
		//	varObject	: document.form.radio
		//	varName		: 선택폼 이름
		//**********************************************************************************//

		function fncCheckUserRadioButton(varObject, varName){
			
			var chkRadio = 0;

			for(var i=0; i < varObject.length ; i++)
			{
				if(varObject[i].checked == true) 
				{
					chkRadio++
					return true;
				}
			}

			if(chkRadio == 0){
				alert(varName + " 선택해 주세요");
				varObject[0].focus();
			return;
			}
		}

		//**********************************************************************************//
		//사용자 입력폼 입력여부 체크
		//	varObject	: document.form.checkbox
		//	varName		: 선택폼 이름
		//**********************************************************************************//
		function fncCheckUserCheckBox(varObject, varName)
		{
			var nSelCount = 0;

			for(i=0 ; i < varObject.length; i++)
			{
				if (varObject[i].checked == true)
				{
					//alert(varName + " 선택해 주세요");
					//return true;
					nSelCount++
					return true;
				}
			}

			if ( nSelCount == 0 ) {
				alert(varName + " 선택해 주세요");
				//varObject[i].focus();
				return false;
			}
		}		

		//**********************************************************************************//
		//숫자만 입력 (키 입력 이벤트 발생시) - 현재 쓰고 있는 함수
		//**********************************************************************************//
		function fncCheckOnlyNumber(x)
		{
			var code = window.event.keyCode; 

			if ((code > 34 && code < 41) || (code > 47 && code < 58) || (code > 95 && code < 106) || code == 8 || code == 9 || code == 13 || code == 46){ 
				window.event.returnValue = true; 
				return; 
			} 
			window.event.returnValue = false; 
		}

		//**********************************************************************************//
		//입력폼에서 Null문자를 제거
		//	varStr	: document.form.Inputbox.value
		//**********************************************************************************//
		function Trim(varStr)
		{
			var reg = /\s+/g;
			return varStr.replace(reg,'');
		}
		

		//**********************************************************************************//
		//숫자만 입력 (키 입력 이벤트 발생시) - 현재 쓰고 있는 함수
		//**********************************************************************************//
		function fncCheckOnlyNumber(x)
		{
			var code = window.event.keyCode; 

			if ((code > 34 && code < 41) || (code > 47 && code < 58) || (code > 95 && code < 106) || code == 8 || code == 9 || code == 13 || code == 46){ 
				window.event.returnValue = true; 
				return; 
			} 
			window.event.returnValue = false; 
		}
		
		//**********************************************************************************//
		//영문, 숫자만 입력 (키 입력 이벤트 발생시)
		//**********************************************************************************//
		function fncCheckOnlyNumChar()
		{
			if (!(((event.keyCode >= 48) && (event.keyCode <= 57)) || ((event.keyCode >= 65) && (event.keyCode <= 90)) || ((event.keyCode >= 97) && (event.keyCode <= 122))))
      			event.returnValue=false;
		}

		//**********************************************************************************//
		//한글만 입력 (키 입력 이벤트 발생시)
		//**********************************************************************************//
		function onlyHangul(x)
		{

			for(i=0 ; i<x.NAME.value.length ; i++) {

				// 유니코드로 반환

				var valUni = x.NAME.value.charCodeAt(i);				

				// 한글은 128이상

				if(valUni > 31 && valUni < 128) {
					alert('한글만 입력가능!');
					x.NAME.value = "";
					x.NAME.focus();
					return;
				}
			}
		}

		//**********************************************************************************//
		//주민번호 유효성체크
		//	varSocietyID1	: document.form.InputBox (주민번호의 앞부분)
		//	varSocietyID2	: document.form.InputBox (주민번호의 뒷부분)
		//**********************************************************************************//
		function fncCheckSocietyID(varSocietyID1, varSocietyID2)
		{
			var varSocietyID, aryNum, varNumSum;
			
			if (Trim(varSocietyID1.value) == "")
			{
				alert("주민번호를 입력하세요");
				varSocietyID1.value = "";
				varSocietyID1.focus()
				return false;
			}
			if (Trim(varSocietyID2.value) == "")
			{
				alert("주민번호를 입력하세요");
				varSocietyID2.value = "";
				varSocietyID2.focus();
				return false;
			}
			
			varSocietyID = varSocietyID1.value + varSocietyID2.value;
			aryNum = new Array(13);
			
			for (var i = 0; i < 13; i++)
			{
				aryNum[i] = parseInt(varSocietyID.charAt(i));
			}
			
			varNumSum = aryNum[0]*2 + aryNum[1]*3 + aryNum[2]*4 + aryNum[3]*5 + aryNum[4]*6 + aryNum[5]*7 + aryNum[6]*8 + aryNum[7]*9 + aryNum[8]*2 + aryNum[9]*3 + aryNum[10]*4 + aryNum[11]*5;
			varNumSum = varNumSum % 11;
			varNumSum = 11 - varNumSum;
			
			if (varNumSum > 9)
			{
		    		varNumSum = varNumSum % 10
			}
			
			if (varNumSum != aryNum[12])
			{
				alert ("잘못된 주민번호 입니다");
				varSocietyID1.value == "";
				varSocietyID1.focus();
				return false;
			}else
				return true;
		}
		
		//**********************************************************************************//
		//Email 문자체크
		//**********************************************************************************//
         function emailcheck(v1) { //Email 포맷의 유효성을 검사
           val = v1;
           re = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,3})$/;
           if (val.search(re) != 0) {
              return false;
           } else { return true; }

         }


		function fncCheckEmail(varObject)
		{
			var varStr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@.-_";
			
			for (var i = 0; i < varObject.value.length; i++)
			{
				if (-1 == varStr.indexOf(varObject.value.charAt(i)))
				{
					alert("올바른 Email이 아닙니다");
					varObject.focus();
					return false;
				}
			}
			
			var varInputText = varObject.value;
			var varTemp1, varTemp2;
			
			varTemp1 = varInputText.indexOf('@', 0) + 1;
			varTemp2 = varInputText.indexOf('.', 0) + 1;
			
			if (varTemp1 == "")
			{
				alert("올바른 Email이 아닙니다");
				varObject.focus();
				return false;
			}
			
			if (varTemp2 == "")
			{
				alert("올바른 Email이 아닙니다");
				varObject.focus();
				return false;
			}
			
			var varTemp3;
			varTemp3 = varInputText.split("@");
			
			if ((!varTemp3[0] || !varTemp3[1]) || (varTemp3[0] == "" || varTemp3[1] == ""))
			{
				alert("올바른 Email이 아닙니다");
				varObject.focus();
				return false;
			}
			
			var varTemp4;
			varTemp4 = varTemp3[1].split(".");
			
			if ((!varTemp4[0] || !varTemp4[1]) || (varTemp4[0] == "" || varTemp4[1] == ""))
			{
				alert("올바른 Email이 아닙니다");
				varObject.focus();
				return false;
			}
			
			return true;
		}
		
		//**********************************************************************************//
		//입력문자 체크 (Submit()후)
		//	varObject		: document.form.Inputbox
		//	varDivision	: 체크문자 구분
		//					1 : 숫자만입력
		//					2 : 알파벳문자만 입력
		//					3 : 숫자, 알파벳문자만 입력
		//**********************************************************************************//
		function fncCheckSubmitCharNum(varObject, varDivision)
		{
			if (Trim(varObject.value) == "")
			{
				alert("입력이 되지 않았습니다");
				varObject.value = "";
				varObject.focus();
				return false;
			}
			
			if (varDivision == "1")		//숫자만 입력
			{
				var varNum="0123456789";
			}else if (varDivision == "2")	//알파벳문자만 입력
			{
				var varNum="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
			}else if (varDivision == "3")	//숫자, 알파벳문자만 입력
			{
				var varNum="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
			}
			
			for (var i = 0; i < varObject.value.length; i++)
			{
				if (-1 == varNum.indexOf(varObject.value.charAt(i)))
				{
					if (varDivision == "1")		//숫자만 입력
					{
						alert("숫자만 입력하실수 있습니다");
					}else if (varDivision == "2")	//알파벳문자만 입력
					{
						alert("알파벳문자만 입력하실수 있습니다");
					}else if (varDivision == "3")	//숫자, 알파벳문자만 입력
					{
						alert("숫자와 알파벳문자만 입력하실수 있습니다");
					}
					
					varObject.focus();
					return false;
				}
			}
			
			return true;
		}



      //자동 탭 이동 (원하는 글자 숫자 넣었을때 포커스 이동)------------------------------------------------------------------

      function tab_order(arg, nextname, len) { 
	    if (arg.value.length == len) { 
	        nextname.focus() 
	        return; 
	    } 
      }

     /*
	 * 입력한 값이 숫자인지 검사(".", ",", "-" 무시)
	**/
	function isNumber(element) {
		var key = event.keyCode;					

		
	}

	function isOnlyNumber() {
		var key = event.keyCode;				
		if(key<48 || key>57){     
		 event.returnValue = false;
		}
	}


	//3자리마다 콤마 찍어주기 일반
	function commify(n){
		var reg = /(^[+-]?\d+)(\d{3})/;
		n += '';
		while (reg.test(n))
			n = n.replace(reg, '$1' + ',' + '$2');

		return n;
	}


	String.prototype.number_format = function(decimals,dec_point,thousands_sep){
	if(decimals==null){decimals=999;}	
	if(dec_point==null){dec_point='.';}if(thousands_sep==null){thousands_sep=',';}
	var temp = this.toString().replace(/[^-\.\+\d]/g,'');
	var arr = temp.split(dec_point);
	
	if(arr[1] && arr[1].length>0){arr[1] = arr[1].substr(0,decimals);}
	arr[0] = arr[0].replace(/(\d)(?=(?:\d{3})+(?!\d))/g,'$1'+thousands_sep);
	temp = temp.replace(/(\d)(?=(?:\d{3})+(?!\d))/g,'$1'+thousands_sep)
	if(arr[1] && decimals>0 && arr[1].length>0){return arr[0] + dec_point + arr[1];}
	else {return temp;}
	}
	Number.prototype.number_format = function(decimals,dec_point,thousands_sep){
		return this.toString().number_format(decimals,dec_point,thousands_sep)
	}
	function number_format(str,decimals,dec_point,thousands_sep){
		return str.toString(decimals,dec_point,thousands_sep);
	}


	function toComma(str,element) {
		
		
		str = str + "";
		str = str.replace(/(\,)/g,"");
		var tmp1, tmp2, tmp3;
		var statValue="", strValue="", modValue="";
		if(str.substring(0,1) == "-"){
			statValue = str.substring(1,str.length);
		} else {
			statValue = str;
		}
		tmp1 = statValue.length;

		if(tmp1 > 3){
			tmp2 = Math.floor(tmp1/3);
			tmp3 = tmp1 % 3;

			if(tmp3>0){
				strValue += statValue.substring(0,tmp3) + ",";
				modValue = statValue.substring(tmp3);
			} else {
				modValue = statValue;
			}

			for ( var i=0; i < tmp2 ; i++ ){
				if(i==(tmp2-1)){
					strValue += modValue.substring(i*3,i*3+3);
				} else {
					strValue += modValue.substring(i*3,i*3+3) + ",";
				}
			}
		} else {
			strValue = statValue;
		}
		
		if(str.substring(0,1) == "-"){ srtValue = "-"+strValue; }
		else{srtValue = strValue;}
		
		//element.value=srtValue;
		element.value=element.value.number_format(2,'.',',');
	}

    // 우편번호 찾기
	function PostSearch(fn, zipcd1, zipcd2, addr1, addr2) {
		var width_ = 400;
		var height_ = 370;
		var left_ = screen.width;
		var top_ = screen.height;
		left_ = left_/2 - (width_/2);
		top_ = top_/2 - (height_/2);
		window.open("/Symtra_Manage/pop_post.asp?fn="+fn+"&zipcd1="+zipcd1+"&zipcd2="+zipcd2+"&addr1="+addr1+"&addr2="+addr2,"PopUP_PostWin",'height='+height_+',width='+width_+',status=0,scrollbars=1,resizable=1,left='+left_+',top='+top_+'')
	}
	
    // [MSZ] 20180703 달력 년월일 공통 함수
    function datePicker() {
        $(".datepicker").datepicker({
            changeMonth: true,
            changeYear: true,
            showMonthAfterYear: true,
            //showButtonPanel: true,
            dateFormat: 'yy-mm-dd', // 데이터는 yyyy-MM-dd로 나옴  
            closeText: '닫기',
            prevText: '이전달',
            nextText: '다음달',
            currentText: '오늘',
            monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            dayNames: ['일', '월', '화', '수', '목', '금', '토'],
            dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            weekHeader: 'Wk',
        })
    }

    // [MSZ] 20180703 달력 년월 공통 함수
    function monthPicker() {
        $('.datepicker').datepicker({
            changeMonth: true,
            changeYear: true,
            showMonthAfterYear: true,
            showButtonPanel: true,
            dateFormat: 'yy-mm',
            monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            onClose: function (dateText, inst) {
                var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
                var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                $(this).datepicker('setDate', new Date(year, month, 1));
            }
        });
    }
 
    // [MSZ] 20180703 달력 년 공통 함수
    function yearPicker() {
        $('.datepicker').datepicker({
            changeYear: true,
            showButtonPanel: true,
            dateFormat: 'yy',
            onClose: function (dateText, inst) {
                var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                $(this).datepicker('setDate', new Date(year, 1, 1));
            }
        });
    }

    // [MSZ] 20180703 달력 초기화
    function clearPicker() {
        $(".datepicker").datepicker("destroy");
    }