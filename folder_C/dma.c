#include<stdio.h>
#include<stdlib.h>

int main(){

    int *ptr;
    ptr=(int *)malloc(5*sizeof(int));
     ptr[0]=1;
      ptr[1]=4;
       ptr[2]=5;
        ptr[3]=6;
         ptr[4]=7;

         for(int i=0;i<=5;i++){
            printf("%d\n",ptr[i]);
         }
         

 ptr=realloc(ptr,7);
      ptr[0]=1;
      ptr[1]=4;
       ptr[2]=5;
        ptr[3]=6;
         ptr[4]=7;
         ptr[5]=8;
         ptr[6]=9;
for(int i=0;i<=7;i++){
            printf("%d\n",ptr[i]);
         }
         free(ptr);

return 0;
}