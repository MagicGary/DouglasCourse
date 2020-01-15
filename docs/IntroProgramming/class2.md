# Class 2 Notes

## floating type 

has to put a `f` at the end of the number if declared as a `float`

```csharp
float f = 134.45E-2f;
Console.WriteLine(f);  // output: 1.3445
```

## decimal type 

has to put a `m` at the end of the number if declared as a `decimal`

```csharp
decimal m = 1.5E6m;
Console.WriteLine(m);  // output: 1500000
```

## pass by reference vs pass by value 

```csharp
static void Main(string[] args)
        {
            string name1 = "Simon";
            string name2 = "Ivan";

            //name1 passed down by value, unchanged
            //name2 passed down by reference, changed
            NameChange(name1, ref name2);
            WriteLine("name1 " + name1);
            WriteLine("name2 " + name2);
            ReadKey();
        }

        static void NameChange(string nameOne, ref string nameTwo)
        {
            nameOne = "Ray";
            nameTwo = "Steve";
        }
    }
```

