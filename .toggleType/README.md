# .toggleType()

Toggle input type

## Use
*For example you could use the following code:*

**Change type via trigger:**

    <script type="text/javascript">
    $(function() {
        $('.checkbox').click(function() {
            $(this).toggleType($('.password')); //type password used by defualt
        });
    });
    </script>

    <input type="password" class="password" value="password" />
    <input type="checkbox" class="checkbox" value="" />

 **Change own type:**

    <script type="text/javascript">
    $(function() {
      $('.text').click(function() {
         $(this).toggleType({
               type: 'text',
               element: $(this),
               callback: function(a) {
                  alert('Ok!');
               }
            });
      });
    });
    </script>

	<input type="button" class="text" value="click" />

* License
    The .toggleType() module is licensed under the MIT (MIT_LICENSE.txt) license.

* Copyright (c) 2011 [Alexander Guinness] (https://github.com/monolithed)
