#include<stdio.h>
float hot();
float cold();
    

int main(){
    int temp;
    printf("enter temperature\n",temp);
    scanf("%f",&temp);
    if(temp<=20){
        return hot();
    
    }
    else{
        return cold();
    }

}
float hot(){
     printf("cold %d\n");
}
float cold(){
    printf("hot %d\n");
}
