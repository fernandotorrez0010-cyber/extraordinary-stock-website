document.addEventListener('DOMContentLoaded', function() {
    let feedback = document.querySelectorAll('.feedback-item');

    for (let i = 0; i < feedback.length; i++) {
        const element = feedback[i];
        element.addEventListener('click', function(e) {
            feedback.forEach(function(e) {
                e.classList.remove('active');
            });
            element.classList.toggle('active');
        })
    }

	initRiskAcceptPanel();
});

function initRiskAcceptPanel() {
	const closeBtn = document.querySelector('.risk-warning__close');
	const panel = document.querySelector('.risk-warning');

	if (closeBtn) {
		closeBtn.addEventListener('click', () => {
			panel.style.display = 'none';
			localStorage.setItem('riskAccepted', 'true');
		});
	}

	if (localStorage.getItem('riskAccepted') === 'true') {
		return true;
	} else {
		panel.style.display = 'block';
	}
}