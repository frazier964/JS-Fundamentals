public class Factorial {
  
    public static long factorial(long n) {
        .
        if (n < 0) {
            
            return 1;
        }
        if (n == 0) {
            return 1; 
        }
        
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
       
        if (args.length == 0) {
            System.out.println("Usage: java Factorial <number>");
           
            System.out.println(factorial(0)); 
            return;
        }

        try {
            
            long num = Long.parseLong(args[0]);
            
            System.out.println(factorial(num));
        } catch (NumberFormatException e) {
            
            System.out.println(1);
        }
    }
