import { Builder, By,  until } from 'selenium-webdriver';

(async function testLogin() {
    const driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:5173'); 

        const dropdownButton = await driver.wait(until.elementLocated(By.css('button[aria-haspopup="true"]')), 10000);
        console.log("Dropdown button found. Clicking it...");
        await dropdownButton.click();
        await driver.sleep(1000); 

        const loginForm = await driver.wait(until.elementLocated(By.css('[data-testid="login-popup"]')), 10000);
        await driver.wait(until.elementIsVisible(loginForm), 10000);
        console.log("Login form is now visible.");

        console.log("Entering email...");
        await driver.findElement(By.css('[data-testid="email-input"]')).sendKeys('test@example.com');

        console.log("Entering password...");
        await driver.findElement(By.css('[data-testid="password-input"]')).sendKeys('password123'); 

        console.log("Clicking login button...");
        await driver.findElement(By.css('[data-testid="login-button"]')).click();
        await driver.sleep(2000);

        const usernameElement = await driver.wait(until.elementLocated(By.css('.navbar-username-class')), 10000); 
        await driver.wait(until.elementIsVisible(usernameElement), 10000);
        console.log("Login successful, username found in navbar.");

    } catch (error) {
        console.error('Error during the test:', error);
    } finally {
        await driver.quit();
    }
})();
