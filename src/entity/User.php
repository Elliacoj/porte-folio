<?php

namespace Amaur\App\entity;

class User {
    private ?int $id;
    private ?string $username;
    private ?string $password;

    /**
     * @param int|null $id
     * @param string|null $username
     * @param string|null $password
     */
    public function __construct(int $id = null, string $username = null, string $password = null)
    {
        $this->id = $id;
        $this->username = $username;
        $this->password = $password;
    }

    /**
     * Return the id of User
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * Set the id of User
     * @param int|null $id
     */
    public function setId(?int $id): void
    {
        $this->id = $id;
    }

    /**
     * Return the username of User
     * @return string|null
     */
    public function getUsername(): ?string
    {
        return $this->username;
    }

    /**
     * Set the username of User
     * @param string|null $username
     */
    public function setUsername(?string $username): void
    {
        $this->username = $username;
    }

    /**
     * Return the password of User
     * @return string|null
     */
    public function getPassword(): ?string
    {
        return $this->password;
    }

    /**
     * Set the password of User
     * @param string|null $password
     */
    public function setPassword(?string $password): void
    {
        $this->password = $password;
    }
}