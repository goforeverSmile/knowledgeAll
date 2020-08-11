// ConsoleApplication1.cpp : 定义控制台应用程序的入口点。
//

#include "stdafx.h"

#include <stdio.h>
#include <stdlib.h>
#include <iostream>
#include <fstream>
#include <sstream>
#include <String>
using namespace std;
struct student
{
	int num;
	int age;
	char name[30];
};
//写入结构体数组
void writeStruct()
{
	FILE*stream;
	student* listStruct;
	const int Size = 5;
	listStruct = (struct student*)malloc(sizeof(struct student) * Size);
	errno_t err;
	for (int i = 0; i < Size; i++) {
		listStruct[i].num = i;
		listStruct[i].age = i * 10;
		strcpy_s(listStruct[i].name, "name");
	}
	err = fopen_s(&stream,"ruleGame.txt", "wb");
	if (err != 0) {
		printf("Open File failed.\n");
		exit(0);
	}
	for (int i = 0; i < Size; i++) {
		if (fwrite(&listStruct[i], sizeof(struct student), 1, stream) != 1) {
			printf("File Write Error.\n");
		}
	}
	printf("write data success.\n");
	fclose(stream);
}


int main()
{
	int i = 0;
	while (i<1)
	{
		i++;
		writeStruct();
	}

	int myid = 1, procnum = 64;
	ofstream out("./ruleGame", ios::app);//app表示每次操作前均定位到文件末尾
	if (out.fail()) {
		cout << "error\n";
	}
	out << "[shangtian:]=" << myid<<"     " ;
	out << "[xaidi]=" << myid << "     ";
	out << "[zoulong]=" << myid << "     ";
	out << "[youhu]=" << myid << "     ";
	out << "[zaitian]=" << myid << "     ";
	out << "[procnum]=" << procnum << endl;
	out.close();

    return 0;
}

