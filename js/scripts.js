jQuery(document).ready(function	() {

	var allCategories = [];

	var Category = {
		name: "some category",
		purchases: [],
		totalAmount: function () {
			var sum = 0;
			for (var i = 0; i < this.purchases.length; i++) {
				sum += (this.purchases[i].totalCost());
				/*console.log(this.purchases[i]);*/ //о, строчка - ты спасла меня(((
			} return sum;
		}
	};

	$('#categories-form').submit(function(e){
		e.preventDefault();

		var newCategory = Object.create(Category);
		newCategory.name = $("input#category").val();

		$("ul#categories").append("<li><span class='catName'>" + newCategory.name  + "</span></li>");
		$('.havnt-categories').hide();
		$("span#activeCategory").text(newCategory.name);

		allCategories.push(newCategory);

	});

	var Purchase = {
		description: "some stuff",
		price: 0,
		quantity: 1,
		totalCost: function () {
			return this.price * this.quantity
		}
	};

	$('#purchases-form').submit(function(e){
		e.preventDefault();
		$('.havnt-purchases').hide();

		var newPurchase = Object.create(Purchase);
		newPurchase.description = $("input#description").val();
		newPurchase.price = parseInt($("input#price").val());
		newPurchase.quantity = parseInt($("input#quantity").val());

		var activeCategory = $("span#activeCategory").text();

		for(var i = 0; i < allCategories.length; i++){
			if(activeCategory == allCategories[i].name){
				allCategories[i].purchases.push(newPurchase);
				$("#total-amount").empty().append('Total amount of category is: ' + allCategories[i].totalAmount() );

			}
		}


		$("table").show().append('<tr>' +
		'<td class="description"></td>' +
		'<td class="price"></td>' +
		'<td class="quantity"></td>>' +
		'<td class="total"></td>>' +
		'</tr>');



		$(".description").last().text(newPurchase.description);
		$(".price").last().text(newPurchase.price);
		$(".quantity").last().text(newPurchase.quantity);
		$(".total").last().text(newPurchase.totalCost());


	/*	$("input#description").val(""); //очистим инпуты, но почему нельзя исп.empty? ага теперь вообще приходит NaN! BUT WHY??!!
		newPurchase.price = $("input#price").val("");
		newPurchase.quantity = $("input#quantity").val("");*/


	});

/*	$("ul#categories li").last().click(function() {

		var activeCategory = $("ul#categories li").text();
		$("span#activeCategory").text(activeCategory);

		for(var i = 0; i < allCategories.length; i++){
			if(activeCategory == allCategories[i].name){


				allCategories[i].purchases.push(newPurchase);
				$("#total-amount").empty().append('Total amount of category is: ' + allCategories[i].totalAmount() );

			}
		}



	}
		$("span#activeCategory").text(newCategory.name);
		$("ul#tasks").text("");
		newCategory.purchases.forEach(function(task) {
			$("ul#tasks").append("<li>" + task + "</li>");
		});*/



});
