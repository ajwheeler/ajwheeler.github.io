+++
title = "math notes"
template = "simple-page.html"
+++
# Math and physics notes

## matrix identities

- \\((ABC\dots)^{-1} = C^{-1} B^{-1} A^{-1}\\).
- \\((ABC\dots)^T = C^T B^T A^T\\).
- \\(\vert c A \vert = c^n \vert A\vert\\) where A is \\( n \times n \\).

## linear regression

The **Moorse-Penrose pseudoinverse** for orthogonal real matrices is

\\( A^+ = (A^T A)^{-1} A^T \\)

The **normal equation** is

\\(\widehat\beta = (X^T \Sigma^{-1} X)^{-1} X^T \Sigma^{-1} y\\)

The **hat matrix** is given by

\\( X (X^T \Sigma^{-1} X)^{-1} X^T \Sigma^{-1} \\)

## matrix decompositions

**Singular Value decomposition**: \\(A = U D V^T\\) where
- The columns of \\(U\\) are the eigenvectors of \\(A A^T\\)
- \\(D\\) is a diagonal matrix containting hte eigenvalues of \\(A A^T\\) (the singular values)
- \\(V\\) is the matrix whose columns are the eigenvectors of \\(A^T A\\)

**LU decomposition**: \\(A = LU\\) where
- \\(L\\) is lower-triangular
- \\(U\\) is upper-triangular

## The Normal distribution

$$\mathcal{N}(\mathbf{x} | \mathbf{\mu}, \Sigma) =  \exp\left( - \frac{1}{2} \mathbf{r}^T \Sigma^{-1} \mathbf{r} \right) \, |2 \pi \Sigma|^{-\frac{1}{2}}$$

where \\(\mathbf{r} = \mathbf{x} - \mathbf{\mu}\\). Note that the \\(2 \pi\\) is *inside* the determinant.

**linear operations on Gaussian random variables**: If \\( x \sim \mathcal{N}(\mu_x, \Sigma_X)\\), and \\(y \sim \mathcal{N}(\mu_y, \Sigma_y)\\), then
- \\(x + y \sim \mathcal{N}(\mu_x + \mu_y, \Sigma_x + \Sigma_y) \\).
- \\(Ax \sim \mathcal{N}(A \mu_x, A \Sigma_x A^T)\\).

**Product of Gaussian PDFs:**
\\(\mathcal{N}(\mathbf{x} \vert \alpha, \Sigma) \mathcal{N}(\mathbf{x} \vert \beta, \Omega) = \eta \mathcal{N}(\mathbf{x} | \mathbf{m}, C)\\), where
- \\( \mathbf{m} = (\Sigma^{-1} + \Omega^{-1})^{-1} (\Sigma^{-1} \alpha + \Omega^{-1} \beta) \\).
- \\( C = (\Sigma^{-1} + \Omega^{-1})^{-1}\\).
- \\( \eta = \mathcal{N}(\alpha-\beta \vert 0, \Sigma + \Omega) \\).

**Refactoring the product of heirarchical Gaussian PDFs**:
\\(\mathcal{N}(\mathbf{x} \vert M \theta, C) \mathcal{N}(\theta \vert \mu, \Lambda) = \mathcal{N}(\theta \vert \mathbf{a}, A) \mathcal{N}(\mathrm{x} \vert \mathrm{b}, B)\\), where
- \\(A^{-1} = \Lambda^{-1} + M^T C^{-1} M\\).
- \\( a = A(\Lambda^{-1} \mu + M^T C^{-1} \mathbf{x})\\).
- \\(B = C + M^T \Lambda M\\).
- \\(b = M \mu\\).

---
Sources: [The Matrix Cookbook](https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf), [Hogg+ 2020](https://ui.adsabs.harvard.edu/link_gateway/2020arXiv200514199H/doi:10.48550/arXiv.2005.14199)
