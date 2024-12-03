const IPFSService = require("./ipfsService");
const dotenv = require("dotenv");

dotenv.config();

async function testPinataIntegration() {
  try {
    // Test JSON upload
    console.log("Testing JSON Upload...");
    const jsonData = {
      name: "Test NFT Metadata",
      description: "This is a test metadata file for NFT.",
      image: "https://example.com/image.png", // Replace with an actual image URL
    };

    const jsonResponse = await IPFSService.uploadJSON(jsonData);
    console.log("JSON Upload Response:", jsonResponse);
  } catch (error) {
    console.error("Error testing Pinata integration:", error.message);
  }
}

testPinataIntegration();
