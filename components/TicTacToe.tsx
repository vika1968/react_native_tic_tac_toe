import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

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

  useEffect(() => {
    const winner: Player | null = getWinner();
    if (winner) {
      setGameover(true);
      Alert.alert(
        `Player ${winner} won!`,
        'If you want to start a new game, press the "New game" button.'
      );
    }
  }, [gameBoard]);

  const handleCellPress = (index: number) => {
    if (gameBoard[index] === '' && !gameover) {
      const updatedGameBoard: string[] = [...gameBoard];
      updatedGameBoard[index] = player;
      setGameBoard(updatedGameBoard);
      setPlayer(changePlayer());
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
        <View style={styles.row}>
          {gameBoard.slice(0, 3).map((cell, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.cell,
                winningLine.includes(index) && styles.winnerCell,
              ]}
              onPress={() => handleCellPress(index)}
              disabled={gameover || cell !== ''}
            >
              <Text style={styles.cellText}>{cell}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {gameBoard.slice(3, 6).map((cell, index) => (
            <TouchableOpacity
              key={index + 3}
              style={[
                styles.cell,
                winningLine.includes(index + 3) && styles.winnerCell,
              ]}
              onPress={() => handleCellPress(index + 3)}
              disabled={gameover || cell !== ''}
            >
              <Text style={styles.cellText}>{cell}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {gameBoard.slice(6, 9).map((cell, index) => (
            <TouchableOpacity
              key={index + 6}
              style={[
                styles.cell,
                winningLine.includes(index + 6) && styles.winnerCell,
              ]}
              onPress={() => handleCellPress(index + 6)}
              disabled={gameover || cell !== ''}
            >
              <Text style={styles.cellText}>{cell}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  gameContainer: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cell: {
    width: 100,
    height: 100,
    backgroundColor: '#e0e0e0',
    borderWidth: 2,
    borderColor: '#bdbdbd',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  cellText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#424242',
  },
  winnerCell: {
    backgroundColor: '#aed581',
    borderColor: '#81c784',
  },
  gameInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
  info: {
    color: '#424242',
    fontSize: 24,
    marginBottom: 10,
  },
  resetButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f06292',
    borderRadius: 5,
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default TicTacToe;
