# Student marks tracker
This project provides a simple web application for updating and displaying student marks.

## Technologies Used
The following technologies were used in the development of this project:

### Backend:
Django (Python)
### Frontend:
HTML
CSS
JavaScript
Chart.js
## Views
The project includes several views, which are defined in the views.py file. Here's a brief description of what each view does:

. home(request): Renders the home page of the web application. This view is associated with the URL ''.

. update_marks(request): Handles the updating of student marks data in the backend. This view is associated with the URL '/api/update-marks/'.

. chart(request): Renders a page that displays a chart of student marks data. This view is associated with the URL '/api/chart/'.

. marks(request, subject=None): Renders a page that displays a table of student marks data. If a subject is provided in the URL (e.g., '/api/marks/physics/'), the table will only display marks data for that subject. If no subject is provided, the table will display marks data for all subjects. This view is associated with the URL '/api/marks/'.

## URLs
The project includes several URLs, which are defined in the urls.py file. Here's a brief description of each URL:

. '': Associates the home(request) view with the root URL.

. '/api/update-marks/': Associates the update_marks(request) view with the URL '/api/update-marks/'.

. '/api/chart/': Associates the chart(request) view with the URL '/api/chart/'.

. '/api/marks/<str:subject>/': Associates the marks(request, subject=None) view with URLs that include a subject parameter (e.g., '/api/marks/physics/').

. '/api/marks/': Associates the marks(request, subject=None) view with the URL '/api/marks/'. If no subject parameter is provided, this URL will display marks data for all subjects.
## Home page
## Title: Student Marks Tracker

## Description: A web page that allows users to enter and track student marks in Physics, Chemistry, Biology, and Mathematics.

## Content:

### CSS and JavaScript Libraries
The page uses the following CSS and JavaScript libraries:

Bootstrap v4.0.0 for styling
jQuery v3.2.1 slim for JavaScript
Popper.js v1.12.9 for tooltip and popover positioning
Styling
The page has custom CSS styles defined within the <style> tag, including:

Font family and background color for the body
Heading style for h1
Grid layout for the form using CSS Grid
Styling for labels, input fields, and buttons
Canvas margin
Alerts
The page displays a warning alert that can be dismissed using the 'Close' button. It shows messages that are passed as parameters in the response object.

### Form
The page displays a form with the following fields:

Date: A date input field with id="date" and name="date".
Physics: A text input field with id="Physics" and name="Physics".
Chemistry: A text input field with id="Chemistry" and name="Chemistry".
Biology: A text input field with id="Biology" and name="Biology".
Mathematics: A text input field with id="Mathematics" and name="Mathematics".
Each field also has an associated "Marks" field with a type of "number" and an id attribute matching the subject name (e.g., id="p" for Physics).

The form is submitted using the POST method to the URL defined by the 'update_marks' URL pattern.

CSRF Token
The form includes a CSRF token using the Django {% csrf_token %} template tag. This helps protect against Cross-Site Request Forgery (CSRF) attacks.

Buttons
The form includes two buttons:

Submit button: A button with type="submit" that submits the form.
views chart button: A button with class="button1" that redirects the user to the graph page.



 # Chart Page
 a web page that displays a chart of student marks based on the subject selected by the user from a drop-down menu. The chart is created using the Chart.js library and data is fetched from an API endpoint using JavaScript's fetch() method.

The page contains an HTML structure with a banner, a drop-down menu to select the subject, and a chart displayed using the canvas element. The banner includes a heading with the title of the page. The drop-down menu is styled using CSS and includes options for four subjects (Chemistry, Physics, Biology, and Total).

The JavaScript code includes a function called createChart that takes two parameters, type and data, to create a chart using the Chart.js library. The function first destroys any existing chart to avoid conflicts and then creates a new chart using the specified type and data. The chart options include scales for the x and y axes and a title with the subject name.

The updateChart function is used to fetch data from the API endpoint based on the selected subject and update the chart accordingly. The function uses a conditional statement to check the value of the subject and fetches the corresponding data using the fetch() method. The fetched data is then used to create a new chart using the createChart function.