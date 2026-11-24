# Git Setup Commands

## 1. Check Git Version

```bash
git --version
```
**Meaning:** Checks whether Git is installed and displays its version.

## 2. Configure Username

```bash
git config --global user.name "Umar Khalid"
```
**Meaning:** Sets your Git username, which appears in commits.

## 3. Configure Email

```bash
git config --global user.email "your-email@example.com"
```
**Meaning:** Sets your Git email address, associated with your commits.

## 4. Set Default Branch

```bash
git config --global init.defaultBranch main
```
**Meaning:** Sets `main` as the default branch for new repositories.

## 5. Configure Default Editor

```bash
git config --global core.editor "code --wait"
```
**Meaning:** Uses VS Code as the default editor for Git operations.

## 6. Enable Colored Output

```bash
git config --global color.ui auto
```
**Meaning:** Enables colored output in the terminal for better readability.

## 7. Configure Auto CRLF

```bash
git config --global core.autocrlf input
```
**Meaning:** Controls how Git handles line endings.

| Value | Meaning |
|---|---|
| `true` | Converts LF to CRLF on checkout and CRLF to LF on commit. |
| `input` | Converts CRLF to LF on commit; doesn't convert on checkout. |
| `false` | Disables automatic line-ending conversion. |

**Recommendation:**
- Windows: `true`
- Linux: `input`

## 8. Check Git Configuration

```bash
git config --list
```
**Meaning:** Displays all Git configuration settings.

## 9. Check Specific Configuration

```bash
git config user.name
git config user.email
git config core.autocrlf
```
**Meaning:** Displays individual configuration values.

## 10. Complete Setup Commands

```bash
git --version

git config --global user.name "Umar Khalid"
git config --global user.email "your-email@example.com"

git config --global init.defaultBranch main
git config --global core.editor "code --wait"
git config --global color.ui auto
git config --global core.autocrlf input

git config --list
```

**Note:** Replace the email with your actual GitHub-associated email address.