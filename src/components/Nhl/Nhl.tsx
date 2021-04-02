import React, { useState } from 'react';
import styles from './Nhl.module.scss';

const Nhl = () => {
  let [playerNo, setPlayerNo] = useState(19);
  let [average, setAverage] = useState(83);

  return <>
    <div className={styles.Nhl}>
     <div>
       <span>Choose how many players:</span>
       <input type="number" value={playerNo} onChange={(x) => setPlayerNo(Number(x.target.value))}></input>
     </div>
     <div>
       <span>Choose average rating:</span>
       <input type="number" value={average} onChange={(x) => setAverage(Number(x.target.value))}></input>
     </div>
   </div>
   <span>You chose {playerNo} players, with {average} average</span>
   </>
}

export default Nhl;