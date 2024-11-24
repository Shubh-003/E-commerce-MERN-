#include <stdio.h>

// Define a structure for a student
typedef struct {
    char name[50];
    int marks;
    float cgpa;
    char course[50];
} Student;

// Function to input data for each student
void inputStudentData(Student *student) {
    printf("Enter student name: ");
    scanf(" %[^\n]", student->name);
    printf("Enter marks obtained: ");
    scanf("%d", &student->marks);
    printf("Enter CGPA: ");
    scanf("%f", &student->cgpa);
    printf("Enter course: ");
    scanf(" %[^\n]", student->course);
}

// Function to write student data to a file
void writeStudentDataToFile(Student students[], int numStudents, const char *filename) {
    FILE *file = fopen(filename, "w");
    if (file == NULL) {
        perror("Error opening file for writing");
        return;
    }

    // Write table header
    fprintf(file, "-------------------------------------------------\n");
    fprintf(file, "| %-20s | %-6s | %-5s | %-20s |\n", "Name", "Marks", "CGPA", "Course");
    fprintf(file, "-------------------------------------------------\n");

    // Write each student's data
    for (int i = 0; i < numStudents; ++i) {
        fprintf(file, "| %-20s | %-6d | %-5.2f | %-20s |\n", students[i].name, students[i].marks, students[i].cgpa, students[i].course);
    }

    fprintf(file, "-------------------------------------------------\n");

    fclose(file);
}

int main() {
    Student students[5];

    // Input data for each student
    for (int i = 0; i < 5; ++i) {
        printf("\nEnter details for student %d:\n", i + 1);
        inputStudentData(&students[i]);
    }

    // Write student data to file
    writeStudentDataToFile(students, 5, "student_data.txt");

    printf("\nStudent data has been written to student_data.txt\n");

    return 0;
}