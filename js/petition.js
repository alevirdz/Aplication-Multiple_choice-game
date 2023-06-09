const getQuestions = () => {
    return axios.post('admin/questions.php', {action: 'get'})
    .then((response) => {
      return response
    })
    .catch ((error) => {
      console.error(error);
    })
  };