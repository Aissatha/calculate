document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    // Validate inputs
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        document.getElementById('result').textContent = "Please enter valid values.";
        return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    
    if (birthDate > today) {
        document.getElementById('result').textContent = "Birth date cannot be in the future.";
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').textContent = `You are ${age} years old.`;
});

// Custom validation messages
document.getElementById('day').addEventListener('input', function() {
    if (this.validity.rangeOverflow || this.validity.rangeUnderflow) {
        this.setCustomValidity('Please enter a valid day between 1 and 31.');
    } else {
        this.setCustomValidity('');
    }
});

document.getElementById('month').addEventListener('input', function() {
    if (this.validity.rangeOverflow || this.validity.rangeUnderflow) {
        this.setCustomValidity('Please enter a valid month between 1 and 12.');
    } else {
        this.setCustomValidity('');
    }
});

document.getElementById('year').addEventListener('input', function() {
    if (this.validity.rangeOverflow || this.validity.rangeUnderflow) {
        this.setCustomValidity('Please enter a valid year.');
    } else {
        this.setCustomValidity('');
    }
});
