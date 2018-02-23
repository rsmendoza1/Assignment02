/*eslint-env browser*/

for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " MarcoPolo" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Marco" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Polo" );
  }
  else
  {
    console.log(i);
  }
}