import React, { useState, Component } from 'react';
import Axios from 'axios';

function VocabAPI() {
  // React Hooks State (Updating state is async)
  const [vocab, setVocab] = useState('');
  const [search, setSearch] = useState('');
  const [vocabHist, setVocabHist] = useState([' ', 'apple', ' ', 'banana']);
  const [definition, setDefinition] = useState(null);
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('en');

  // React Hooks Functions
  const handleVocab = (e) => {
    setVocab(e.target.value)
    setSearch(e.target.value.replace(/ /gi, '%20'));
  }

  const handleSubmitVocab = async (e) => {
    e.preventDefault(); //Prevents hot reload upon submit
    // window.open(`https://translate.google.com/?sl=${selectLang}&tl=${transLang}&text=${search}&op=translate`); //Workaround for GoogleTranslate API requiring $$$
    
    const currSearch = e.target[2].value;
    const body = { vocab: currSearch, sl: sourceLang, tl: targetLang };
    try {
      const response = await Axios.post('/dictionary', {
        header: { 'Content-Type': 'Application/JSON' },
        body: body
      })
      console.log('in post request')
      console.log(response);
      setDefinition(response.data);
    } catch (err) {
      console.log('post request error client side')
      console.log(`Post error on /dictionary: ${err}`)
    }
    
    if (vocabHist.length <= 18) {
      setVocabHist([' ', currSearch, ...vocabHist]);
    } else {
      const vocabHistCopy = vocabHist.slice(0, vocabHist.length - 2);
      setVocabHist([' ', currSearch, ...vocabHistCopy]);
    }
    
    console.log('Form Submitted');
  }

  const handleSourceLang = (e) => {
    setSourceLang(e.target.value);
  }

  const handleTargetLang = (e) => {
    setTargetLang(e.target.value);
  }
  
  //Render
  return (
    <div className='vocabContainer'>
      This is our API Component!
      <form onSubmit={handleSubmitVocab}>
        <label className='apiTextBox'>
          <label htmlFor='sl' className='slContainer'>Translate from: </label>
            <select name='sl' id='sl' className='sl' value={sourceLang} onChange={handleSourceLang}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          <label htmlFor='tl' className='tlContainer'>Translate to: </label>
            <select name='tl' id='tl' className='tl' value={targetLang} onChange={handleTargetLang}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          <div>
            <input type="text" name="vocab" placeholder="Translate vocabulary" value={vocab} onChange={handleVocab}></input> 
            <input type="submit" value="Translate"/> 
          </div>
        </label>
        <div>Definition: { definition }</div>
        <div className='vocabHistContainer'>
          <p>Search History:</p>
          <div className='vocabHist'> { vocabHist } </div>
        </div>
      </form>
    </div>
  )
}

export default VocabAPI;
