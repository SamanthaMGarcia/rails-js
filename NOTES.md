Hijack button of add ingredient with JS
https://github.com/smithWEBtek/rails-recipes

<%= form_tag :action => "create" %>
   Name: <%= text_field "item", "name" %>
<br/>
   Quantity: <%= text_field "item", "quantity"%>
<br/>
   <%= submit_tag %>
  <%= end_form_tag %>
