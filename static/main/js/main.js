document.getElementById('feedbackButton').addEventListener('click', function() {
    document.getElementById('feedbackForm').style.display = 'block';
    document.getElementById('feedbackButton').style.display = 'none';
});

document.getElementById('closeFeedback').addEventListener('click', function() {
    document.getElementById('feedbackForm').style.display = 'none';
    document.getElementById('feedbackButton').style.display = 'block';
});