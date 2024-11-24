 #include<stdio.h>
 #include<string.h>

// void covertVowels(char str);

// int main(){
//     char ch=100;
//     printf("Enter a string:\n",ch);
//     fgets(ch,100,stdin);

// }
// void covertVowels(){

//     for(i=0;str<=\0;iz)
// }
// void remove_space(char str[]);

// int main(){
//     char ch= 100;
//     printf("enter a string:");
//     //fgets(ch,sizeof(ch),stdin);
//     scanf("%s",ch);
//     printf("without spaces");
//     remove_space(ch);
//     return 0;

// }
// void remove_space(char str[]){
//     int i=0;
//     if(str[i]=' '){
//         puts(str[i]);
//     }
//     i++;

// }





/*Make a system that can store information of all students,teachers and staff of your college in the form of structure */

// #include<stdio.h>
// #include<string.h>

// typedef struct computerEngineeringStudents{
//     int student_id;
//     char student_name[100];
// }co;

// typedef struct civilEngineeringStudents{
//     int student_id;
//     char student_name[100];
// }ce;

// typedef struct mechanicalEngineeringStudents{
//     int student_id;
//     char student_name[100];
// }me;

// typedef struct electricalEngineeringstudents{
//     int student_id;
//     char student_name[100];
// }ee;


// typedef struct coteachersInformation{
//     int salary;
//     char teacher_name[100];
// }coteachinfo;

// typedef struct ceteachersInformation{
//     int salary;
//     char teacher_name[100];
// }ceteachinfo;

// typedef struct meteachersInformation{
//     int salary;
//     char teacher_name[100];
// }meteachinfo;

// typedef struct eeteachersInformation{
//     int salary;
//     char teacher_name[100];
// }eeteachinfo;


// typedef struct topLevelInformation{
//     char postName[100];
//     char staff_name[100];
// }topinfo;


// int main(){
//     co COs1;
//     int student_id=1;
//     strcpy(COs1.student_name,"Akanksha");
//     co COs2;
//     student_id=2;
//     strcpy(COs2.student_name,"Rameshwari");

//     ce CEs1;
//     student_id=1;
//     strcpy(CEs1.student_name,"Tushar");
//     ce CEs2;
//     student_id=2;
//     strcpy(CEs2.student_name,"Tejas");

//     me MEs1;
//     student_id=1;
//     strcpy(MEs1.student_name,"Nikita");
//     me MEs2;
//     student_id=2;
//     strcpy(MEs2.student_name,"Diksha");

//     ee EEs1;
//     student_id=1;
//     strcpy(EEs1.student_name,"Yash");
//     ee EEs2;
//     student_id=2;
//     strcpy(EEs2.student_name,"Ashwini");

    
//     coteachinfo COt1;
//     int salary=50000;
//     strcpy(COt1.teacher_name,"Vaishnavi");
//     coteachinfo COt2;
//     salary=50000;
//     strcpy(COt2.teacher_name,"Sakshi");

//     ceteachinfo CEt1;
//     salary=50000;
//     strcpy(CEt1.teacher_name,"Kavita");
//     ceteachinfo CEt2;
//     salary=50000;
//     strcpy(CEt2.teacher_name,"Chetan");

//     meteachinfo MEt1;
//     salary=50000;
//     strcpy(MEt1.teacher_name,"Vijay");
//     meteachinfo MEt2;
//     salary=50000;
//     strcpy(MEt2.teacher_name,"Vedant");

//     eeteachinfo EEt1;
//     salary=50000;
//     strcpy(EEt1.teacher_name,"Sunil");
//     eeteachinfo EEt2;
//     salary=50000;
//     strcpy(EEt2.teacher_name,"Ritesh");


//     topinfo trusty;
//     strcpy(trusty.postName,"Trusty of a College");
//     strcpy(trusty.staff_name,"Omkar");

//     topinfo principle ;
//     strcpy(principle.postName,"principle of a College");
//     strcpy(principle.staff_name,"Aditi");

//     printf("College Information :\n");
   
//     printf("Student Information :\n");

//     printf("Computer Engineering Student Information :\n");

//     printf("student1 id :%d\n",COs1.student_id);
//     printf("Student1 name :%s\n",COs1.student_name);
//     printf("student2 id :%d\n",COs2.student_id);
//     printf("Student2 name :%s\n",COs2.student_name);

//     printf("Civil Engineering Student Information :\n");

//     printf("student1 id :%d\n",CEs1.student_id);
//     printf("Student1 name :%s\n",CEs1.student_name);
//     printf("student2 id :%d\n",CEs2.student_id);
//     printf("Student2 name :%s\n",CEs2.student_name);

//     printf("Mechanical Engineering Student Information :\n");

//     printf("student1 id :%d\n",MEs1.student_id);
//     printf("Student1 name :%s\n",MEs1.student_name);
//     printf("student2 id :%d\n",MEs2.student_id);
//     printf("Student2 name :%s\n",MEs2.student_name);

//     printf("Electrical Engineering Student Information :\n");

//     printf("student1 id :%d\n",EEs1.student_id);
//     printf("Student1 name :%s\n",EEs1.student_name);
//     printf("student2 id :%d\n",EEs2.student_id);
//     printf("Student2 name :%s\n",EEs2.student_name);

//     printf("Teacher Information :\n");

//     printf("Computer teacher Information :\n");

//     printf("teacher1 id :%d\n",COt1.salary);
//     printf("teacher1 name :%s\n",COt1.teacher_name);
//     printf("teacher2 id :%d\n",COt2.salary);
//     printf("teacher2 name :%s\n",COt2.teacher_name);

//     printf("Civil teacher Information :\n");

//     printf("teacher1 id :%d\n",CEt1.salary);
//     printf("teacher1 name :%s\n",CEt1.teacher_name);
//     printf("teacher2 id :%d\n",CEt2.salary);
//     printf("teacher2 name :%s\n",CEt2.teacher_name);

//     printf("Mechanical teacher Information :\n");

//     printf("teacher1 id :%d\n",MEt1.salary);
//     printf("teacher1 name :%s\n",MEt1.teacher_name);
//     printf("teacher2 id :%d\n",MEt2.salary);
//     printf("teacher2 name :%s\n",MEt2.teacher_name);

//     printf("Electrical teacher Information :\n");

//     printf("teacher1 id :%d\n",EEt1.salary);
//     printf("teacher1 name :%s\n",EEt1.teacher_name);
//     printf("teacher2 id :%d\n",EEt2.salary);
//     printf("teacher2 name :%s\n",EEt2.teacher_name);

//     printf("Top Level Straff Information :\n");

//     printf("postname  :%s\n",trusty.postName);
//     printf("trusty name :%s\n",trusty.staff_name);

//     printf("postname  :%s\n",principle.postName);
//     printf("principle name :%s\n",principle.staff_name);

//    return 0;
// }


#include <stdio.h>
#include <string.h>

#define MAX_STUDENTS 100
#define MAX_SUBJECTS 10

typedef struct {
    char name[50];
    int id;
    float grades[MAX_SUBJECTS];
    float credits[MAX_SUBJECTS];
    int attendance[MAX_SUBJECTS];
    int num_subjects;
    float cgpa;
} Student;

// Function to calculate CGPA for a student
void calculateCGPA(Student *student) {
    float totalGradePoints = 0.0, totalCredits = 0.0;
    for (int i = 0; i < student->num_subjects; i++) {
        totalGradePoints += student->grades[i] * student->credits[i];
        totalCredits += student->credits[i];
    }
    if (totalCredits != 0) {
        student->cgpa = totalGradePoints / totalCredits;
    } else {
        student->cgpa = 0.0;
    }
}

// Function to display student information
void displayStudent(const Student *student) {
    printf("Student ID: %d\n", student->id);
    printf("Name: %s\n", student->name);
    printf("Number of subjects: %d\n", student->num_subjects);
    printf("Subjects Grades, Credits and Attendance:\n");
    for (int i = 0; i < student->num_subjects; i++) {
        printf("  Subject %d: Grade: %.2f, Credit: %.2f, Attendance: %d%%\n",
               i + 1, student->grades[i], student->credits[i], student->attendance[i]);
    }
    printf("CGPA: %.2f\n\n", student->cgpa);
}

int main() {
    Student students[MAX_STUDENTS];
    int num_students = 0;

    // Add information for students
    strcpy(students[0].name, "John Doe");
    students[0].id = 101;
    students[0].num_subjects = 3;
    students[0].grades[0] = 3.5; students[0].credits[0] = 3.0; students[0].attendance[0] = 90;
    students[0].grades[1] = 4.0; students[0].credits[1] = 4.0; students[0].attendance[1] = 95;
    students[0].grades[2] = 3.8; students[0].credits[2] = 2.0; students[0].attendance[2] = 85;

    strcpy(students[1].name, "Jane Smith");
    students[1].id = 102;
    students[1].num_subjects = 2;
    students[1].grades[0] = 3.7; students[1].credits[0] = 4.0; students[1].attendance[0] = 88;
    students[1].grades[1] = 3.9; students[1].credits[1] = 3.0; students[1].attendance[1] = 92;

    num_students = 2;

    // Calculate CGPA for each student
    for (int i = 0; i < num_students; i++) {
        calculateCGPA(&students[i]);
    }

    // Display information for each student
    for (int i = 0; i < num_students; i++) {
        displayStudent(&students[i]);
    }

    return 0;
}