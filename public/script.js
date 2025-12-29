async function analyzeSentiment() {
    const text = document.getElementById("textInput").value;
    const result = document.getElementById("result");

    if (!text) {
        result.innerText = "Please enter some text!";
        return;
    }

    const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
    });

    const data = await response.json();
    result.innerText = `Sentiment: ${data.sentiment}`;
}
