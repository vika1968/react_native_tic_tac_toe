import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Player = 'X' | 'O';

const TicTacToe = () => {
  const [player, setPlayer] = useState<Player>('X');
  const [gameover, setGameover] = useState<boolean>(false);
  const [gameBoard, setGameBoard] = useState<string[]>(Array(9).fill(''));
  const [winningLine, setWinningLine] = useState<number[]>([]);

  const changePlayer = (): Player => {
    return player === 'X' ? 'O' : 'X';
  };

  const getWinner = (): Player | null => {
    const wins: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < wins.length; i++) {
      const [a, b, c] = wins[i];
      if (
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c] &&
        gameBoard[a] !== ''
      ) {
        setWinningLine([a, b, c]);
        return gameBoard[a] as Player;
      }
    }

    return null;
  };

  const handleCellPress = (index: number) => {
    if (gameBoard[index] === '' && !gameover) {
      const updatedGameBoard: string[] = [...gameBoard];
      updatedGameBoard[index] = player;
      setGameBoard(updatedGameBoard);
      setPlayer(changePlayer());

      const winner: Player | null = getWinner();
      if (winner) {
        setGameover(true);
        alert(`Player ${winner} won! If you want to start a new game, press the "New game" button.`);
        setPlayer(winner);
      }
    }
  };

  const handleReset = () => {
    setPlayer('X');
    setGameover(false);
    setGameBoard(Array(9).fill(''));
    setWinningLine([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.gameContainer}>
        {gameBoard.map((cell, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.cell,
              winningLine.includes(index) && styles.winnerCell,
            ]}
            onPress={() => handleCellPress(index)}
            disabled={gameover}
          >
            <Text style={styles.cellText}>{cell}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.gameInfo}>
        <Text style={styles.info}>Turn for {player}</Text>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetButtonText}>New game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
  gameContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 50,
  },
  cell: {
    width: 90,
    height: 90,
    backgroundColor: '#f3e7f9',
    borderWidth: 1,
    borderColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  cellText: {
    fontSize: 60,
  },
  winnerCell: {
    backgroundColor: '#e88b9a',
    borderColor: 'red',
  },
  gameInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
  info: {
    color: '#341255',
    fontStyle: 'italic',
    fontSize: 20,
  },
  resetButton: {
    marginTop: 10,
    paddingVertical: 5,
    padding: 30,
    backgroundColor: '#e88b9a',
    borderColor: 'red' 
   
  },
  resetButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default TicTacToe;
