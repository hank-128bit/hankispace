/* 
 * Step
 * Sync ( from DB ), Conversion ( data -> doc )
*/
$(document).ready(function () {
	let schedules = [
	{
		id : 1,
		event_type : 100,
		event_name : "행크 야후",
		begin : "2020-01-01 11:00:00",
		end : "2020-01-08 11:00:00"
	},
	{
		id : 2,
		event_name : "행크 랜드",
		event_type : 101,
		begin : "2020-01-01 11:00:00",
		end : "2020-01-08 11:00:00"
	},
	{
		id : 3,
		event_name : "행크 페스티벌",
		event_type : 102,
		begin : "2020-01-08 11:00:00",
		end : "2020-01-15 11:00:00"
	}
	];
	
	$("#conversion_doc").click(function(){
		
		function s2ab(s) { 
			var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
			var view = new Uint8Array(buf);  //create uint8array as viewer
			for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
			return buf;    
		}
		
		
		// WorkBook 생성
		let wb = XLSX.utils.book_new();
		
		// Sheet 생성
		let ws = XLSX.utils.json_to_sheet(schedules);
		
		let sheet_name = 'my_sheet';
		XLSX.utils.book_append_sheet(wb, ws, sheet_name);
	
		let wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
		
		let file_name = 'PatchNote.xlsx';
		saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), file_name);
	});
	
});

