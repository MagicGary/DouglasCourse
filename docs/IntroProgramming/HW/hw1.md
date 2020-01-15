# HW 1

```csharp
using System;
using System.Text.RegularExpressions;
using System.Linq;

namespace W1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!\n");
            Console.WriteLine("Write 4 random numbers, spererated by spaces,\nand press enter when you are done.");

            String input;

            input = Console.ReadLine();

            input = Regex.Replace(input.Trim(), @"\s+", ",");

            // new string
            //                (input
            //                     .Where
            //                     (
            //                         c => !char.IsWhiteSpace(c)
            //                     )
            //                     .ToArray<char>()
            //                );

            //System.Console.WriteLine(input);

            var inputArray = input.Split(',');

            double[] numArray;

            try
            {
                numArray = Array.ConvertAll(inputArray, s => double.Parse(s));

                if (numArray.Length == 4)
                {
                    System.Console.WriteLine("max: " + numArray.Max());
                    System.Console.WriteLine("min " + numArray.Min());
                }
                else
                {
                    System.Console.WriteLine("Please make sure 4 numbers only!");
                }

            }
            catch (System.Exception)
            {

                System.Console.WriteLine("Please make sure enter numbers only!"); ;
            }
        }
    }
}
```