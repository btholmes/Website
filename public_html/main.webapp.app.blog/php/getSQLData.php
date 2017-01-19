 <?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "blogposts743";


$con = mysqli_connect("localhost",$username,$password, $dbname);
 
if (!$con)
{
  die('Could not connect: ' . mysqli_error());
}
 
//mysqli_select_db($dbname);

$query = "SELECT * FROM `posts`";

$comments = mysqli_query($con, $query);
$allPosts = "";  

while($row = mysqli_fetch_array($comments))
{

  $name = $row['Name'];
  $post = $row['Post'];
  $user = $row['User'];


	$allPosts = $allPosts . "/" . $name . "/" . $post . "/" . $user; 

} 
 echo $allPosts . "/"; 
mysqli_close($con);
?> 