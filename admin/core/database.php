<?php
class Database
{
    private $servername;
    private $username;
    private $password;
    private $dbname;
    private $conn;

    public function __construct($servername, $username, $password, $dbname)
    {
        $this->servername = $servername;
        $this->username = $username;
        $this->password = $password;
        $this->dbname = $dbname;
    }

    public function connect()
    {
        try {
            $this->conn = new PDO("mysql:host=$this->servername;dbname=$this->dbname", $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return true;
        } catch (PDOException $e) {
            echo "Connection error: " . $e->getMessage();
            return false;
        }
    }

    public function getQuestion()
    {
        try {
            $stmt = $this->conn->query("SELECT * FROM questions_game");
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if (!empty($results)) {
                return $results;
            }else{
                return 'empty';
            }
            
        } catch (PDOException $e) {
            echo "Connection error: " . $e->getMessage();
            return false;
        }
    }

    public function saveQuestion($_getJson)
    {
        try {
            $jsonQuestions = json_encode($_getJson);
            $stmt = $this->conn->prepare("INSERT INTO questions_game (question) VALUES (?)");
            $stmt->bindParam(1, $jsonQuestions);
            $stmt->execute();

            echo 'true';
        } catch (PDOException $e) {
            echo "Connection error: " . $e->getMessage();
        }
    }

    public function deleteQuestionBD($param_id)
    {
        try {
            $stmt = $this->conn->prepare("DELETE FROM questions_game WHERE id= :id");
            $stmt->bindParam(':id', $param_id);
            $stmt->execute();
            $rowCount = $stmt->rowCount();
            if ($rowCount > 0) {
                echo "Question deleted successfully";
            } else {
                echo "No found ID.";
            }
        } catch (PDOException $e) {
            echo "Connection error: " . $e->getMessage();
            return false;
        }
    }
}
