<script>
document.addEventListener("DOMContentLoaded", function () {
    let paymentStatus = false;

    if (!paymentStatus) {
        const overlay = document.createElement("div");
        overlay.style.cssText = `
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: white;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-size: 24px;
          color: red;
        `;

        overlay.innerHTML = `
          <h2>⚠️ Payment Pending ⚠️</h2>
          <p>Your website is temporarily disabled due to unpaid dues.</p>
          <p>Please contact the developer to restore access.</p>
        `;

        document.body.appendChild(overlay);

        setTimeout(function () {
            window.location.href = "https://dev-elestra.pantheonsite.io/payment-pending";
        }, 5000);
    }
});

</script>