const shuffle = (_collectionQuestion) => {
    let currentIndex = _collectionQuestion.length,  randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [_collectionQuestion[currentIndex], _collectionQuestion[randomIndex]] = [
        _collectionQuestion[randomIndex], _collectionQuestion[currentIndex]];
    }
  
    return _collectionQuestion;
  }