<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload CSV</title>
</head>
<body>
    <h2>Upload CSV</h2>
    <form action="upload_csv.php" method="post" enctype="multipart/form-data">
        <label for="csv_file">Choose CSV file:</label>
        <input type="file" name="csv_file" accept=".csv" required><br>

        <input type="submit" value="Upload">
    </form>
</body>
</html>
