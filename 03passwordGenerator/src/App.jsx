import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [allowNumbers, setAllowNumbers] = useState(false);
  const [allowChars, setAllowChars] = useState(false);
  const copyPasswordref = useRef(null);
  
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz";
    if (allowNumbers) str += "0123456789";
    if (allowChars) str += "!@#$%&*";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, allowChars, allowNumbers, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, allowNumbers, allowChars, generatePassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    copyPasswordref.current?.select();
    copyPasswordref.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center "> Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 my-3">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder='Password'
            readOnly
            ref={copyPasswordref}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipBoard}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label> Length {length} </label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              id="numberAllowed"
              defaultChecked={allowNumbers}
              onChange={() => { setAllowNumbers(prev => !prev) }}
            />
            <label> Numbers </label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              id="charAllowed"
              defaultChecked={allowChars}
              onChange={() => { setAllowChars(prev => !prev) }}
            />
            <label> Characters </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
