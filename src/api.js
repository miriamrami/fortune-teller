export async function fetchAdvice() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.slip.advice;
    } catch (error) {
      console.error('Error fetching advice:', error);
      return "Hmm, the magic ball is cloudy. Try again later!";
    }
  }