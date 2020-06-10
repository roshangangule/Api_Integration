$(function(){

	var $items = $('#myList');
	
	var $name = $('#name');
	var $phone = $('#phone');
	var $dept = $('#dept');
	var $status = $('#status');
	var $updatedBy = $('#updatedBy');
	var $cid = $('#cid');

	$.ajax({
	
		type:'GET',
		url:'http://localhost:9090/api/employees',
		success: function(items){
			$.each(items,function(i,item){
				$items.append('<tr>',
				'<td>'+item.id+'</td>',
				'<td>'+item.name+'</td>',
				'<td>'+item.phone+'</td>',
				'<td>'+item.dept+'</td>',
				'<td>'+item.status+'</td>',
				'<td>'+item.createddtm+'</td>',
				'<td>'+item.updateddtm+'</td>',
				'<td>'+item.updatedBy+'</td>',
				'<td>'+item.theCountry.cname+'</td>',
				'</tr>');
			});
		},
		error:function(){
		
			alert("Error loading employee");
		
		}
	
	});
	
	$('#button').on('click',function(){
	
		 var item = {
		 
		 	name:$name.val(),
		 	phone:$phone.val(),
		 	dept:$dept.val(),
		 	status:$status.val(),
		 	updatedBy:$updatedBy.val(),
		 	cid:$cid.val(),
		 
		 };
		 
		 $.ajax({
		 
		 	type:'POST',
		 	url:'http://localhost:9090/api/employees',
		 	data:item,
		 	success:function(items){
		 		$items.append('<tr>',
				'<td>'+item.id+'</td>',
				'<td>'+item.name+'</td>',
				'<td>'+item.phone+'</td>',
				'<td>'+item.dept+'</td>',
				'<td>'+item.status+'</td>',
				'<td>'+item.createddtm+'</td>',
				'<td>'+item.updateddtm+'</td>',
				'<td>'+item.updatedBy+'</td>',
				'<td>'+item.theCountry.cname+'</td>',
				'</tr>');
		 		alert("Employee added successfully!");
		 	},
		 	error:function(){
		 		alert("Employee Not added!");
		 	}
		 
		 });
	
	});


});