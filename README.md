# Img_gallery

An image displaying website which allows users to view different images, small or big when the image or when the arrow icons are clicked. When the image is clicked a modal window is used to display a bigger image.

This website does not utilize any libraries, it is built with HTML, CSS, and Javascript.
The original project was built on Jquery plugins
repository: https://github.com/DanielekPark/Image-gallery
hosted site link: https://danielekpark.github.io/Image-gallery/

If you are unfamiliar with Jquery please visit this link:
https://jquery.com/
or
https://www.w3schools.com/jquery/jquery_intro.asp

If you are unfamilar with jquery plugins please visit this link:
https://learn.jquery.com/plugins/

In summary to Jquery plugins, are files that are utilized to provide a certain feature to a website such as having a video background, adding animation, changing font sizes based off a user's interaction, and etc.

One of the challenges that were encountered were displaying an image after the second click on the next icon. Originally the image was displayed the using the method .indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
However traversing the Document Object Model (DOM) proved to be a better solution.
https://www.w3schools.com/js/js_htmldom.asp
A new feature to be implemented is a search bar to display images relevant to the user's input.

The requirement to use this site is to have Visual Studio Code installed on your computer. Have index.html tab open on Visual Studio Code, and copy and paste the relative path of index.html onto the browser. HAPPY CODING!!!!
