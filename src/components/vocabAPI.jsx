import React, { useState, Component } from 'react';
import Axios from 'axios';
import { Languages } from './language'

function VocabAPI() {
  // React Hooks State (Updating state is async)
  const [vocab, setVocab] = useState('');
  const [search, setSearch] = useState('');
  const [vocabHist, setVocabHist] = useState([]);
  const [translation, setTranslation] = useState(null);
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
    
    setTranslation(`https://translate.google.com/?sl=${sourceLang}&tl=${targetLang}&text=${search}&op=translate`);

    const currSearch = e.target[0].value;
    const body = { vocab: currSearch, sl: sourceLang, tl: targetLang };
    try {
      console.log('Logged try block for post request');
      const response = await Axios.post('/dictionary', {
        header: { 'Content-Type': 'Application/JSON' },
        body: body
      })
      console.log(`reponse: ${response}`);
      setDefinition(response.data);
    } catch (err) {
      console.log(`Catch block, POST error on /dictionary: ${err}`)
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

  const handleLink = () => {
    if(!vocab == '' && definition !== 'Sorry, we cannot find this word') window.open(translation);
  }
  
  //Render
  return (
    <div className='APIContainer'>
      <div className='formContainer'>
        <form onSubmit={handleSubmitVocab}>
          <label className='apiTextBox'>
            <div>
              <input type="text" name="vocab" placeholder="Vocabulary Word" value={vocab} onChange={handleVocab}></input> 
              <input type="submit" value="Define"/> 
            </div>
          </label>
          <label htmlFor='sl' className='slContainer'>Translate from: </label>
              <select name='sl' id='sl' className='sl' value={sourceLang} onChange={handleSourceLang}>
                { Languages.map((language) => (
                  <option key={`l-${language.langId}`} value={language.value}>
                    {language.language}
                  </option>
                )) }
              </select>
            <label htmlFor='tl' className='tlContainer'>Translate to: </label>
              <select name='tl' id='tl' className='tl' value={targetLang} onChange={handleTargetLang}>
                { Languages.map((language) => (
                  <option key={`l-${language.langId}`} value={language.value}>
                    {language.language}
                  </option>
                )) }
              </select>
        </form>
      </div>
        <div>Definition: { definition }</div>
        <div className='transContainer'>
          <p>Translation:</p>
          <div className='translation'>
            <button id='transBtn' onClick={ handleLink }>Click to Translate Vocab</button>
          </div>
        </div>
        <div className='vocabHistContainer'>
          <p>Search History:</p>
          <div className='vocabHist'> { vocabHist } </div>
        </div>
    </div>
  )
}

export default VocabAPI;
