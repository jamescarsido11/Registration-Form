<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registration Success</title>
  <link rel="stylesheet" href="assets/style.css">
</head>
<body>
  <div class="submit-container">
    <h2 style="color: green;">Registration Successful!</h2>
    <p>
      Thank you, 
      <?php 
        if (!empty($_POST['firstname'])) {
          echo htmlspecialchars($_POST['firstname']); 
        }
      ?> 
      Your registration has been completed successfully.
    </p>
    <a href="index.html">
      <button>Go Back to Registration</button>
    </a>
  </div>
</body>
</html>