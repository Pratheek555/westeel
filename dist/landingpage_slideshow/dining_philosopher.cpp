//Dining philosopher problem
#include <pthread.h>
#include <stdio.h>
#include <unistd.h>
#include <vector>

#define NUM_PHILOSOPHERS 5

pthread_mutex_t forks[NUM_PHILOSOPHERS];

void* philosopher(void* num)
{
    int id;
    int left_fork;
    int right_fork;

    id = *(int*)num;
    left_fork = id;
    right_fork = (id + 1) % NUM_PHILOSOPHERS;

    while (1)
    {
        printf("Philosopher %d is thinking\n", id);
        usleep(100000);

        if (id == NUM_PHILOSOPHERS - 1)
        {
            pthread_mutex_lock(&forks[right_fork]);
            pthread_mutex_lock(&forks[left_fork]);
        }
        else
        {
            pthread_mutex_lock(&forks[left_fork]);
            pthread_mutex_lock(&forks[right_fork]);
        }

        printf("Philosopher %d is eating\n", id);
        usleep(100000);

        pthread_mutex_unlock(&forks[left_fork]);
        pthread_mutex_unlock(&forks[right_fork]);
    }
    return NULL;
}

int main()
{
    pthread_t threads[NUM_PHILOSOPHERS];
    int ids[NUM_PHILOSOPHERS];
    int i;

    for (i = 0; i < NUM_PHILOSOPHERS; i++)
    {
        pthread_mutex_init(&forks[i], NULL);
    }

    for (i = 0; i < NUM_PHILOSOPHERS; i++)
    {
        ids[i] = i;
        pthread_create(&threads[i], NULL, philosopher, &ids[i]);
    }

    for (i = 0; i < NUM_PHILOSOPHERS; i++)
    {
        pthread_join(threads[i], NULL);
    }

    for (i = 0; i < NUM_PHILOSOPHERS; i++)
    {
        pthread_mutex_destroy(&forks[i]);
    }

    return 0;
}
