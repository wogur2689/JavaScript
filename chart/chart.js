// User count chart
const userCtx = document.getElementById('userChart').getContext('2d');
new Chart(userCtx, {
    type: 'bar',
    data: {
        labels: ['월', '화', '수', '목', '금', '토', '일'],
        datasets: [{
            label: '사용자',
            data: [12, 19, 3, 5, 2, 3, 7],
            backgroundColor: '#d9b382',
        }]
    }
});
