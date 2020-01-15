# Class 1/Quizz 1 Notes

## string format 
{c} is for currency 
and the numeric value after {c} is for decimal numbers

```csharp
decimal[] amounts = { 16305.32m, 18794.16m };
Console.WriteLine("   Beginning Balance           Ending Balance");
Console.WriteLine("   {0,C2}{1,C2}", amounts[0], amounts[1]);
// Displays:
//        Beginning Balance           Ending Balance
//        $16,305.32                      $18,794.16     
```

```csharp
double value = 12345.6789;
Console.WriteLine(value.ToString("C", CultureInfo.CurrentCulture));

Console.WriteLine(value.ToString("C3", CultureInfo.CurrentCulture));

Console.WriteLine(value.ToString("C3", 
                  CultureInfo.CreateSpecificCulture("da-DK")));
// The example displays the following output on a system whose
// current culture is English (United States):
//       $12,345.68
//       $12,345.679
//       12.345,679 kr}
```

## string escape 

either use ``@`` or ``\\`` <br>
and ``@`` has to come before the string ``" "``, i.e. ``@"c:\documents\files\u0066.txt``

```csharp
string filename1 = @"c:\documents\files\u0066.txt";
string filename2 = "c:\\documents\\files\\u0066.txt";

Console.WriteLine(filename1);
Console.WriteLine(filename2);
// The example displays the following output:
//     c:\documents\files\u0066.txt
//     c:\documents\files\u0066.txt
```
