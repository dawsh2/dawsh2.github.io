# Development Journal - Portfolio Website Project
CS 463/563 - Intro to Web Development

## Project Links
- GitHub Repository: https://github.com/dawsh2/dawsh2.github.io
- Deployed Site: https://dawsh2.github.io

## Development Sessions

### Session 1: Project Setup and Initial Structure (2 hours)
**Date: 11/29**

#### Tasks Completed:
1. Created GitHub repository
2. Set up basic HTML structure
3. Implemented navigation bar

#### Technical Details:
- Created semantic HTML structure using nav, section, and article elements
- Implemented fixed navigation using CSS position: fixed
- Added smooth scrolling behavior using CSS scroll-behavior

#### Challenges:
- Initially had issues with the fixed navigation covering section content
- Solution: Added scroll-margin-top to sections to account for nav height

#### Resources Used:
- MDN Web Docs on Semantic HTML: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
- CSS-Tricks guide on position: fixed: https://css-tricks.com/almanac/properties/p/position/

### Session 2: Styling and Responsive Design (3 hours)
**Date: [11/30]**

#### Tasks Completed:
1. Created styles.css
2. Implemented responsive grid layout
3. Styled navigation and sections

#### Technical Details:
- Used CSS Grid for project and experience cards
- Implemented media queries for mobile responsiveness
- Created consistent color scheme using CSS variables

#### Challenges:
- Grid layout wasn't responding well on mobile devices
- Solution: Used grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))

#### Resources Used:
- CSS Grid Guide: https://css-tricks.com/snippets/css/complete-guide-grid/
- Responsive Design Patterns: https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns

### Session 3: Contact Form and JavaScript (2 hours)
**Date: [11/31]**

#### Tasks Completed:
1. Built contact form HTML structure
2. Implemented form validation
3. Added form submission handling

#### Technical Details:
- Used HTML5 form validation attributes
- Implemented custom JavaScript validation
- Added user feedback for form submission

#### Challenges:
- Form was submitting even with invalid inputs
- Solution: Added preventDefault() and custom validation logic

#### Resources Used:
- JavaScript Form Validation Guide: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
- Regular Expressions for Email Validation

### Session 4: Projects Section and Content (2 hours)
**Date: [12/01]**

#### Tasks Completed:
1. Added project cards
2. Implemented project links
3. Created project descriptions

#### Technical Details:
- Used CSS Grid for project layout
- Added hover effects for interactive elements
- Implemented responsive images

#### Challenges:
- Project cards weren't aligning properly on different screen sizes
- Solution: Adjusted grid gap and padding for better spacing

#### Resources Used:
- CSS Box Shadow Examples: https://getcssscan.com/css-box-shadow-examples

### Session 5: Testing and Optimization (2 hours)
**Date: [12/02]**

#### Tasks Completed:
1. Cross-browser testing
2. Accessibility testing
3. Performance optimization

#### Technical Details:
- Ran Lighthouse audits
- Fixed accessibility issues with ARIA labels
- Optimized images and CSS

#### Challenges:
- Low accessibility score due to contrast issues
- Solution: Adjusted color scheme to meet WCAG guidelines

#### Resources Used:
- WAVE Web Accessibility Tool
- Google Lighthouse Documentation

### Session 6: Documentation and Deployment (1 hour)
**Date: [12/03]**

#### Tasks Completed:
1. Created README.md
2. Wrote development journal
3. Deployed to GitHub Pages

#### Technical Details:
- Set up GitHub Pages deployment
- Documented code and features
- Created comprehensive README

#### Challenges:
- Initial GitHub Pages deployment wasn't working
- Solution: Corrected repository settings and branch configuration

#### Resources Used:
- GitHub Pages Documentation: https://docs.github.com/en/pages

## New Techniques Learned

1. Advanced CSS Grid
   - Used auto-fit and minmax for responsive layouts
   - Implemented grid areas for complex layouts

2. Form Validation
   - Created custom validation patterns
   - Implemented user-friendly error messages

3. Accessibility Best Practices
   - ARIA labels implementation
   - Semantic HTML structure
   - Color contrast considerations

4. Git Workflow
   - Proper commit message formatting
   - Branch management
   - GitHub Pages deployment

## External Resources and Tutorials Used

### Documentation
- MDN Web Docs
- W3Schools CSS References
- GitHub Pages Documentation

### Tutorials
- CSS-Tricks Grid Guide
- JavaScript Form Validation Tutorial
- Responsive Design Patterns Guide

### Tools
- Google Lighthouse
- WAVE Accessibility Tool
- Git and GitHub
- Visual Studio Code

## Future Improvements

1. Performance
   - Implement lazy loading for images
   - Optimize CSS delivery

2. Features
   - Add dark mode toggle
   - Implement form backend
   - Add more interactive elements

3. Content
   - Add more project examples
   - Include blog section
   - Expand work experience section
  

### Session 7: Theme Switching Implementation (2 hours)
**Date: [12/05]**

#### Tasks Completed:
1. Added theme toggle button to navigation
2. Implemented CSS variables for theming
3. Created theme switching JavaScript functionality

#### Technical Details:
- Added data-theme attribute to HTML root element
- Created CSS variables for both light and dark themes
- Implemented JavaScript toggle functionality

#### Challenges:
- Initially had issues with theme toggle not working
- Solution: Simplified JavaScript code and added proper event listeners
- Added console logging for debugging

#### Resources Used:
- MDN docs on CSS Custom Properties
- CSS-Tricks guide on dark mode

### Session 8: Weather Widget Integration (3 hours)
**Date: [12/06]**

#### Tasks Completed:
1. Created weather widget HTML structure
2. Added weather API integration
3. Implemented geolocation functionality
4. Added error handling and loading states

#### Technical Details:
- Used OpenWeatherMap API for weather data
- Implemented browser geolocation API
- Added error handling for API and geolocation failures
- Created loading and error states for better UX

#### Challenges:
- Initial issues with weather data not loading
- Solution: Added detailed error logging and improved error handling
- Had to debug API integration with console logs

#### Code Implementation:
```javascript
async function initWeather() {
    const weatherDisplay = document.getElementById('weather-display');
    if (!weatherDisplay) return;

    try {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const weatherData = await getWeatherData(
            position.coords.latitude,
            position.coords.longitude
        );

        displayWeather(weatherData);
    } catch (error) {
        console.error('Weather error:', error);
        // Handle error state
    }
}
```

#### Resources Used:
- OpenWeatherMap API Documentation: https://openweathermap.org/api
- MDN Geolocation API docs: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
- JavaScript Error Handling best practices

### Session 9: Testing and Debugging (2 hours)
**Date: [12/07]**

#### Tasks Completed:
1. Tested theme switching across browsers
2. Debugged weather widget functionality
3. Implemented error handling improvements
4. Added loading states and user feedback

#### Technical Details:
- Added console logging for debugging
- Improved error message display
- Enhanced user feedback during loading states

#### Challenges:
- Weather widget needed better error handling
- Solution: Added detailed error messages and improved user feedback
- Made error states more informative for users

#### Resources Used:
- Chrome DevTools documentation
- JavaScript debugging techniques
- UX design patterns for loading states

## New Techniques Learned

Additional techniques from recent sessions:
1. CSS Custom Properties for Theming
   - Using CSS variables for dynamic theme switching
   - Managing color schemes with CSS custom properties

2. Weather API Integration
   - Working with external APIs
   - Handling API keys securely
   - Managing asynchronous API calls

3. Geolocation API
   - Using browser geolocation
   - Handling user permissions
   - Error handling for location services

4. Debugging Techniques
   - Console logging for troubleshooting
   - Browser DevTools usage
   - Error handling best practices

## Future Improvements

Additional improvements identified:
1. Weather Widget
   - Add refresh functionality
   - Include more weather details
   - Add loading animations
   - Implement weather caching

2. Theme Switching
   - Add transition animations
   - Persist theme preference
   - Add system theme detection

## Conclusion

This project provided valuable experience in:
- Modern web development practices
- Responsive design implementation
- Accessibility considerations
- Project documentation
- Development workflow

The most challenging aspects were implementing responsive layouts and ensuring accessibility compliance. These challenges were overcome through careful research, testing, and iteration.
